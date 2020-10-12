import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountriesDataService } from '../data/countries-data.service';
import { Country, Currency, Language } from '../data/country';

export interface FormattedCountry extends Country {
  formattedTopLevelDomain: string;
  formattedCurrencies: string;
  formattedLanguages: string;
  borderNames: string[];
}

@Injectable()
export class DetailViewModel {
    country: Observable<FormattedCountry>;

  constructor(
    activatedRoute: ActivatedRoute,
    countriesDataService: CountriesDataService
  ) {
    this.country = combineLatest([
      activatedRoute.data,
      countriesDataService.countries,
    ]).pipe(
      map(
        ([data, countries]: [
          { country: Country },
          Country[]
        ]): FormattedCountry => formatCountry(data.country, countries)
      )
    );
  }
}

function formatCountry(
  country: Country,
  countries: Country[]
): FormattedCountry {
  return {
    ...country,
    formattedTopLevelDomain: country.topLevelDomain.join(', '),
    formattedCurrencies: country.currencies
      .map((currency: Currency): string => currency.name)
      .join(', '),
    formattedLanguages: country.languages
      .map((language: Language): string => language.name)
      .join(', '),
    borderNames: country.borders
      .map((borderAlpha3Code: string): Country | undefined =>
        countries.find(byAlpha3Code(borderAlpha3Code))
      )
      .filter(exists)
      .map((c: Country): string => c.name),
  };
}

type CountryPredicate = (country: Country) => boolean;

function byAlpha3Code(alpha3Code: string): CountryPredicate {
  return (country: Country): boolean => country.alpha3Code === alpha3Code;
}

function exists(v: any): boolean {
  return !!v;
}
