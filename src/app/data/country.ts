
export interface Country {
    name: string;
    altSpellings: string[];
    flag: string; // url
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: Currency[];
    languages: Language[];
    alpha3Code: string;
    borders: string[]; // alpha3Code
}

export interface Currency {
    name: string;
    code: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}
