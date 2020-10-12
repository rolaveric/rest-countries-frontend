import { Observable, of } from 'rxjs';
import { count, tap } from 'rxjs/operators';

import { Country } from '../data/country';
import { CountryResolver } from './country.resolver';

describe('CountryResolver', () => {
  let countryResolver: CountryResolver;
  beforeEach(() => {
    const countriesDataService: any = {
      countries: of(getCountries()),
    };
    countryResolver = new CountryResolver(countriesDataService);
  });

  describe('resolve()', () => {
    it('Resolves the `name` from route params to a Country record', () => {
      const paramMap = new Map();
      paramMap.set('name', 'Afghanistan');
      const route: any = { paramMap };
      return (countryResolver.resolve(route) as Observable<Country>)
        .pipe(
          tap((country: Country) => {
            expect(country).toEqual(getCountries()[0]);
          })
        )
        .toPromise();
    });

    it('Returns an EMPTY observable if country is not found', () => {
      const paramMap = new Map();
      paramMap.set('name', 'Meep');
      const route: any = { paramMap };
      return (countryResolver.resolve(route) as Observable<Country>)
        .pipe(
          count(),
          tap((valueCount: number) => {
              expect(valueCount).toBe(0);
          })
        )
        .toPromise();
    });
  });
});

function getCountries(): Country[] {
  return [
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
      alpha3Code: 'AFG',
      capital: 'Kabul',
      altSpellings: ['AF', 'Afġānistān'],
      region: 'Asia',
      subregion: 'Southern Asia',
      population: 27657145,
      borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
      nativeName: 'افغانستان',
      currencies: [{ code: 'AFN', name: 'Afghan afghani', symbol: '؋' }],
      languages: [
        {
          iso639_1: 'ps',
          iso639_2: 'pus',
          name: 'Pashto',
          nativeName: 'پښتو',
        },
        {
          iso639_1: 'uz',
          iso639_2: 'uzb',
          name: 'Uzbek',
          nativeName: 'Oʻzbek',
        },
        {
          iso639_1: 'tk',
          iso639_2: 'tuk',
          name: 'Turkmen',
          nativeName: 'Türkmen',
        },
      ],
      flag: 'https://restcountries.eu/data/afg.svg',
    },
    {
      name: 'Åland Islands',
      topLevelDomain: ['.ax'],
      alpha3Code: 'ALA',
      capital: 'Mariehamn',
      altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
      region: 'Europe',
      subregion: 'Northern Europe',
      population: 28875,
      borders: [],
      nativeName: 'Åland',
      currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
      languages: [
        {
          iso639_1: 'sv',
          iso639_2: 'swe',
          name: 'Swedish',
          nativeName: 'svenska',
        },
      ],
      flag: 'https://restcountries.eu/data/ala.svg',
    },
    {
      name: 'Albania',
      topLevelDomain: ['.al'],
      alpha3Code: 'ALB',
      capital: 'Tirana',
      altSpellings: ['AL', 'Shqipëri', 'Shqipëria', 'Shqipnia'],
      region: 'Europe',
      subregion: 'Southern Europe',
      population: 2886026,
      borders: ['MNE', 'GRC', 'MKD', 'KOS'],
      nativeName: 'Shqipëria',
      currencies: [{ code: 'ALL', name: 'Albanian lek', symbol: 'L' }],
      languages: [
        {
          iso639_1: 'sq',
          iso639_2: 'sqi',
          name: 'Albanian',
          nativeName: 'Shqip',
        },
      ],
      flag: 'https://restcountries.eu/data/alb.svg',
    },
    {
      name: 'Algeria',
      topLevelDomain: ['.dz'],
      alpha3Code: 'DZA',
      capital: 'Algiers',
      altSpellings: ['DZ', 'Dzayer', 'Algérie'],
      region: 'Africa',
      subregion: 'Northern Africa',
      population: 40400000,
      borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
      nativeName: 'الجزائر',
      currencies: [{ code: 'DZD', name: 'Algerian dinar', symbol: 'د.ج' }],
      languages: [
        {
          iso639_1: 'ar',
          iso639_2: 'ara',
          name: 'Arabic',
          nativeName: 'العربية',
        },
      ],
      flag: 'https://restcountries.eu/data/dza.svg',
    },
    {
      name: 'American Samoa',
      topLevelDomain: ['.as'],
      alpha3Code: 'ASM',
      capital: 'Pago Pago',
      altSpellings: ['AS', 'Amerika Sāmoa', 'Amelika Sāmoa', 'Sāmoa Amelika'],
      region: 'Oceania',
      subregion: 'Polynesia',
      population: 57100,
      borders: [],
      nativeName: 'American Samoa',
      currencies: [{ code: 'USD', name: 'United State Dollar', symbol: '$' }],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English',
        },
        {
          iso639_1: 'sm',
          iso639_2: 'smo',
          name: 'Samoan',
          nativeName: "gagana fa'a Samoa",
        },
      ],
      flag: 'https://restcountries.eu/data/asm.svg',
    },
    {
      name: 'Andorra',
      topLevelDomain: ['.ad'],
      alpha3Code: 'AND',
      capital: 'Andorra la Vella',
      altSpellings: ['AD', 'Principality of Andorra', "Principat d'Andorra"],
      region: 'Europe',
      subregion: 'Southern Europe',
      population: 78014,
      borders: ['FRA', 'ESP'],
      nativeName: 'Andorra',
      currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
      languages: [
        {
          iso639_1: 'ca',
          iso639_2: 'cat',
          name: 'Catalan',
          nativeName: 'català',
        },
      ],
      flag: 'https://restcountries.eu/data/and.svg',
    },
    {
      name: 'Angola',
      topLevelDomain: ['.ao'],
      alpha3Code: 'AGO',
      capital: 'Luanda',
      altSpellings: ['AO', 'República de Angola', "ʁɛpublika de an'ɡɔla"],
      region: 'Africa',
      subregion: 'Middle Africa',
      population: 25868000,
      borders: ['COG', 'COD', 'ZMB', 'NAM'],
      nativeName: 'Angola',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza', symbol: 'Kz' }],
      languages: [
        {
          iso639_1: 'pt',
          iso639_2: 'por',
          name: 'Portuguese',
          nativeName: 'Português',
        },
      ],
      flag: 'https://restcountries.eu/data/ago.svg',
    },
    {
      name: 'Anguilla',
      topLevelDomain: ['.ai'],
      alpha3Code: 'AIA',
      capital: 'The Valley',
      altSpellings: ['AI'],
      region: 'Americas',
      subregion: 'Caribbean',
      population: 13452,
      borders: [],
      nativeName: 'Anguilla',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar', symbol: '$' }],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English',
        },
      ],
      flag: 'https://restcountries.eu/data/aia.svg',
    },
    {
      name: 'Antarctica',
      topLevelDomain: ['.aq'],
      alpha3Code: 'ATA',
      capital: '',
      altSpellings: [],
      region: 'Polar',
      subregion: '',
      population: 1000,
      borders: [],
      nativeName: 'Antarctica',
      currencies: [
        { code: 'AUD', name: 'Australian dollar', symbol: '$' },
        { code: 'GBP', name: 'British pound', symbol: '£' },
      ],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English',
        },
        {
          iso639_1: 'ru',
          iso639_2: 'rus',
          name: 'Russian',
          nativeName: 'Русский',
        },
      ],
      flag: 'https://restcountries.eu/data/ata.svg',
    },
    {
      name: 'Antigua and Barbuda',
      topLevelDomain: ['.ag'],
      alpha3Code: 'ATG',
      capital: "Saint John's",
      altSpellings: ['AG'],
      region: 'Americas',
      subregion: 'Caribbean',
      population: 86295,
      borders: [],
      nativeName: 'Antigua and Barbuda',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar', symbol: '$' }],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English',
        },
      ],
      flag: 'https://restcountries.eu/data/atg.svg',
    },
    {
      name: 'Argentina',
      topLevelDomain: ['.ar'],
      alpha3Code: 'ARG',
      capital: 'Buenos Aires',
      altSpellings: ['AR', 'Argentine Republic', 'República Argentina'],
      region: 'Americas',
      subregion: 'South America',
      population: 43590400,
      borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
      nativeName: 'Argentina',
      currencies: [{ code: 'ARS', name: 'Argentine peso', symbol: '$' }],
      languages: [
        {
          iso639_1: 'es',
          iso639_2: 'spa',
          name: 'Spanish',
          nativeName: 'Español',
        },
        {
          iso639_1: 'gn',
          iso639_2: 'grn',
          name: 'Guaraní',
          nativeName: "Avañe'ẽ",
        },
      ],
      flag: 'https://restcountries.eu/data/arg.svg',
    },
    {
      name: 'Armenia',
      topLevelDomain: ['.am'],
      alpha3Code: 'ARM',
      capital: 'Yerevan',
      altSpellings: [
        'AM',
        'Hayastan',
        'Republic of Armenia',
        'Հայաստանի Հանրապետություն',
      ],
      region: 'Asia',
      subregion: 'Western Asia',
      population: 2994400,
      borders: ['AZE', 'GEO', 'IRN', 'TUR'],
      nativeName: 'Հայաստան',
      currencies: [{ code: 'AMD', name: 'Armenian dram', symbol: null }],
      languages: [
        {
          iso639_1: 'hy',
          iso639_2: 'hye',
          name: 'Armenian',
          nativeName: 'Հայերեն',
        },
        {
          iso639_1: 'ru',
          iso639_2: 'rus',
          name: 'Russian',
          nativeName: 'Русский',
        },
      ],
      flag: 'https://restcountries.eu/data/arm.svg',
    },
    {
      name: 'Aruba',
      topLevelDomain: ['.aw'],
      alpha3Code: 'ABW',
      capital: 'Oranjestad',
      altSpellings: ['AW'],
      region: 'Americas',
      subregion: 'Caribbean',
      population: 107394,
      borders: [],
      nativeName: 'Aruba',
      currencies: [{ code: 'AWG', name: 'Aruban florin', symbol: 'ƒ' }],
      languages: [
        {
          iso639_1: 'nl',
          iso639_2: 'nld',
          name: 'Dutch',
          nativeName: 'Nederlands',
        },
        {
          iso639_1: 'pa',
          iso639_2: 'pan',
          name: '(Eastern) Punjabi',
          nativeName: 'ਪੰਜਾਬੀ',
        },
      ],
      flag: 'https://restcountries.eu/data/abw.svg',
    },
  ];
}
