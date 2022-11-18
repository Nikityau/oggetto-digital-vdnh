import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

import {HomeComponent} from "./home.component";
import {IndustryComponent} from "./components/industry/industry.component";
import {BannerComponent} from "./components/banner/banner.component";

@NgModule({
  imports: [
    RouterLink,
    NgForOf
  ],
  declarations: [
    HomeComponent,
    IndustryComponent,
    BannerComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
