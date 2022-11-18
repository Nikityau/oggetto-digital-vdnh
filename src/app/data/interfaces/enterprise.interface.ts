import {BaseCoInfo} from "./baseCoInfo.interface";
import {IndustrySlug} from "./industry.interface";

export interface Enterprise extends BaseCoInfo {
  industry_slug: IndustrySlug
  background_image: string
}
