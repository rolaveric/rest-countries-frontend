import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../data/country';
import { DetailViewModel, FormattedCountry } from './detail-view.model';

describe('DetailViewModel', () => {
  let model: DetailViewModel;
  beforeEach(() => {
    const activatedRoute: any = {
      data: of({
        country: getCountry(),
      }),
    };
    const countriesDataService: any = {
      countries: of(getOtherCountries()),
    };
    model = new DetailViewModel(activatedRoute, countriesDataService);
  });

  describe('country', () => {
    it('Emits the country from the ActivatedRoute with formatting applied for rendering', () => {
      return model.country
        .pipe(
          tap((formattedCountry: FormattedCountry) => {
            expect(formattedCountry).toEqual({
              ...getCountry(),
              formattedTopLevelDomain: '.ca',
              formattedCurrencies: 'Canadian dollar',
              formattedLanguages: 'English, French',
              borderNames: ['United States of America'],
            });
          })
        )
        .toPromise();
    });
  });
});

function getCountry(): Country {
  return {
    name: 'Canada',
    topLevelDomain: ['.ca'],
    alpha3Code: 'CAN',
    capital: 'Ottawa',
    altSpellings: ['CA'],
    region: 'Americas',
    subregion: 'Northern America',
    population: 36155487,
    borders: ['USA'],
    nativeName: 'Canada',
    currencies: [{ code: 'CAD', name: 'Canadian dollar', symbol: '$' }],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
      {
        iso639_1: 'fr',
        iso639_2: 'fra',
        name: 'French',
        nativeName: 'français',
      },
    ],
    flag: 'https://restcountries.eu/data/can.svg',
  };
}

function getOtherCountries(): Country[] {
  return [
    {
      name: 'United States of America',
      topLevelDomain: ['.us'],
      alpha3Code: 'USA',
      capital: 'Washington, D.C.',
      altSpellings: ['US', 'USA', 'United States of America'],
      region: 'Americas',
      subregion: 'Northern America',
      population: 323947000,
      borders: ['CAN', 'MEX'],
      nativeName: 'United States',
      currencies: [{ code: 'USD', name: 'United States dollar', symbol: '$' }],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English',
        },
      ],
      flag: 'https://restcountries.eu/data/usa.svg',
    },
  ];
}
