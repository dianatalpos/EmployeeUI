import { IRegion } from 'app/shared/model/employee/region.model';

export interface ICountry {
  id?: number;
  countryName?: string | null;
  region?: IRegion | null;
}

export const defaultValue: Readonly<ICountry> = {};
