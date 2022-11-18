import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "../components/pages/home/home.component";
import {IndustryComponent} from "../components/pages/industry/industry.component";
import {IndustryCompanyComponent} from "../components/pages/industry-company/industry-company.component";
import {PageNotFoundComponent} from "../components/pages/page-not-found/page-not-found.component";

export enum PathRoutesDef {
  HOME = '',
  INDUSTRY = 'industry',
  NOT_FOUND = 'not-found'
}
export enum PathRoutesWthQuery {
  INDUSTRY = PathRoutesDef.INDUSTRY + '/:ind-slug',
  INDUSTRY_CO = PathRoutesWthQuery.INDUSTRY + '/:comp-slug'
}

const routes: Routes = [
  { path: PathRoutesDef.HOME, component: HomeComponent },
  { path: PathRoutesWthQuery.INDUSTRY.toString(), component: IndustryComponent },
  { path: PathRoutesWthQuery.INDUSTRY_CO.toString(), component: IndustryCompanyComponent },
  { path: PathRoutesDef.NOT_FOUND, component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: PathRoutesDef.NOT_FOUND }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {}
