import {BaseCoInfo} from "./baseCoInfo.interface";
import {IndustrySlug} from "./industry.interface";

export interface Enterprise extends BaseCoInfo {
  industry_slug: IndustrySlug,
  company_slug: string,
  background_image: string
}
