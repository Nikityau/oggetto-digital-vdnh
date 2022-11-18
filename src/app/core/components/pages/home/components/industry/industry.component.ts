import {Component, Input} from "@angular/core";
import {PathRoutesDef} from "../../../../../routes/app-routes.module";

@Component({
  selector: 'app-home-industry',
  templateUrl: './industry.component.html',
  styleUrls: [
    './industry.component.scss'
  ]
})
export class IndustryComponent {
  @Input() title: string = "Название"
  @Input() color: string = "#000"
  @Input() indSlug: string = "test"

  path: string = '/' + PathRoutesDef.INDUSTRY
}
