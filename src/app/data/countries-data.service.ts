import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Country } from './country';

@Injectable({ providedIn: 'root' })
export class CountriesDataService {
  countries: Observable<Country[]> = this.httpClient
    .get<Country[]>('https://restcountries.eu/rest/v2/all', { observe: 'body' })
    .pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  constructor(private httpClient: HttpClient) {}
}
