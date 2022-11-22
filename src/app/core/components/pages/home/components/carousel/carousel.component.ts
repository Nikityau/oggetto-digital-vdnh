import {Component, Input, OnInit, OnChanges, SimpleChanges, Directive} from "@angular/core";
import {PathRoutesDef} from "../../../../../routes/app-routes.module";

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss'
  ]
})
export class CarouselComponent implements OnInit, OnChanges {
  currentCompany: any = undefined

  path:string = '/' + PathRoutesDef.INDUSTRY

  @Input() companies: any[] = []

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentCompany = this.companies[0]
  }

  onPaginationClick(company: any) {
    this.currentCompany = company
  }
}
