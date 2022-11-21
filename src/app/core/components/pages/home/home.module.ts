import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";

import {HomeComponent} from "./home.component";
import {IndustryComponent} from "./components/industry/industry.component";
import {BannerComponent} from "./components/banner/banner.component";
import {CarouselComponent} from "./components/carousel/carousel.component";

@NgModule({
  imports: [
    RouterLink,
    NgForOf,
    NgClass
  ],
  declarations: [
    HomeComponent,
    IndustryComponent,
    BannerComponent,
    CarouselComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
