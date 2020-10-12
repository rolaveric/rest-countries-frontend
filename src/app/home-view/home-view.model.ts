import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountriesDataService } from '../data/countries-data.service';
import { Country } from '../data/country';
import { RegionOption } from './region-filter-input/region-filter-input.component';

interface FilterFriendlyCountry extends Country {
  lowerCaseName: string;
  lowerCaseAltSpellings: string[];
}

type CountryFilterFn = (country: FilterFriendlyCountry) => boolean;

@Injectable()
export class HomeViewModel {
  countries: Observable<Country[]>;

  regionOptions: RegionOption[] = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  private searchFilterFn = new BehaviorSubject<CountryFilterFn>(always);
  private regionFilterFn = new BehaviorSubject<CountryFilterFn>(always);

  constructor(private countriesDataService: CountriesDataService) {
    // Process countries with filter-friendly mappings (eg. lowercase names)
    const filterFriendlyCountries = this.countriesDataService.countries.pipe(
      map((countries: Country[]): FilterFriendlyCountry[] =>
        countries.map(toFilterFriendlyCountry)
      )
    );

    this.countries = combineLatest([
      filterFriendlyCountries,
      this.searchFilterFn,
      this.regionFilterFn,
    ]).pipe(
      map(
        ([countries, bySearchQuery, byRegionQuery]: [
          FilterFriendlyCountry[],
          CountryFilterFn,
          CountryFilterFn
        ]): Country[] =>
          countries.filter(
            (country: FilterFriendlyCountry): boolean =>
              bySearchQuery(country) && byRegionQuery(country)
          )
      )
    );
  }

  updateCountrySearch(query: string): void {
    this.searchFilterFn.next(
      query ? byCountryName(query.toLowerCase()) : always
    );
  }

  updateCountryRegion(region: string | undefined): void {
    this.regionFilterFn.next(region ? byRegion(region) : always);
  }
}

const always = () => true;

function toFilterFriendlyCountry(country: Country): FilterFriendlyCountry {
  return {
    ...country,
    lowerCaseName: country.name.toLowerCase(),
    lowerCaseAltSpellings: country.altSpellings.map(
      (altSpelling: string): string => altSpelling.toLowerCase()
    ),
  };
}

function byCountryName(lowerCaseQuery: string): CountryFilterFn {
  return (country: FilterFriendlyCountry): boolean =>
    country.lowerCaseName.includes(lowerCaseQuery) ||
    country.lowerCaseAltSpellings.some(
      (lowerCaseAltSpelling: string): boolean =>
        lowerCaseAltSpelling.includes(lowerCaseQuery)
    );
}

function byRegion(regionQuery: string): CountryFilterFn {
  return (country: FilterFriendlyCountry): boolean => country.region === regionQuery;
}
