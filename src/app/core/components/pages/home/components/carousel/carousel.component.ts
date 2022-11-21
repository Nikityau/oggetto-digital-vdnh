import {Component, Input, OnInit, OnChanges, SimpleChanges} from "@angular/core";


@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss'
  ]
})
export class CarouselComponent implements OnInit, OnChanges {
  currentCompany: any = undefined

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
