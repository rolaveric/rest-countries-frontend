import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { last, switchMap } from 'rxjs/operators';

import { CountriesDataService } from '../data/countries-data.service';
import { Country } from '../data/country';

@Injectable({ providedIn: 'root' })
export class CountryResolver implements Resolve<Country> {
  constructor(
    private countriesDataService: CountriesDataService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Country> | Observable<never> {
    const countryName: string = route.paramMap.get('name');
    return this.countriesDataService.countries.pipe(
      last(),
      switchMap((countries: Country[]):
        | Observable<Country>
        | Observable<never> => {
        const country = countries.find(
          (c: Country): boolean => c.name === countryName
        );
        if (!country) {
          return EMPTY;
        }
        return of(country);
      })
    );
  }
}
