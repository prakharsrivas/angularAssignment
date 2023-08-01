export interface Region {
  [index: number]: { id: number; name: string };
}

export interface TableContent {
  [index: number]: {
    id: number;
    name: string;
    capital: string;
    population: any;
    flag: string;
  };
}
