import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {ApiService} from "./services/api/api.service";

import {HomeModule} from "./components/pages/home/home.module";
import {IndustryModule} from "./components/pages/industry/industry.module";
import {AppRoutesModule} from "./routes/app-routes.module";
import {IndustryCompanyModule} from "./components/pages/industry-company/industry-company.module";
import {PageNotFoundModule} from "./components/pages/page-not-found/page-not-found.module";

import {RootComponent} from "./components/root/root.component";
import {HeaderComponent} from "./components/header/header.component";

import {mirage} from "../miragejs/mirage";
mirage()

@NgModule({
  imports: [
    BrowserModule,
    AppRoutesModule,
    HomeModule,
    IndustryModule,
    IndustryCompanyModule,
    PageNotFoundModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class CoreModule {
}
