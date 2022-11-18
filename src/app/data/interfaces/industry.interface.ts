import {Enterprise} from "./enterprise.interface";
import {BaseCoInfo} from "./baseCoInfo.interface";
import {Product} from "./product.interface";
import {Reviews} from "./reviews.interface";
import {Contacts} from "./contacts.interface";

export type IndustrySlug =
  'prom-ind' |
  'energy-ind' |
  'chem-ind' |
  'garden-ind' |
  'light-ind' |
  'it-ind'

export interface Industry extends BaseCoInfo {
  slug: IndustrySlug,
  color_hex: string,
  description?: string | null,
}

export interface IndustryDirection extends Industry {
  enterprise_count: number,
  enterprises: Enterprise[]
}

export interface IndustryRepresentative extends Industry {
  about_company: string,
  years_practice_description: string | number,
  workers_description: string | number,
  products: Product[],
  services: string | null,
  reviews: Reviews[],
  contacts: Contacts
}
