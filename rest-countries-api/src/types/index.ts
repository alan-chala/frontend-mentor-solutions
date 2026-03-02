export type Flags = {
  svg: string;
  png: string;
};

export type Country = {
  name: string;
  topLevelDomain?: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  gini?: number;
  timezones: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  flags: Flags;
};
