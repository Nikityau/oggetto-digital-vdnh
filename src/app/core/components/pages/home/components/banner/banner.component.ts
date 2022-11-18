import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: [
    './banner.component.scss'
  ]
})
export class BannerComponent {
  @Input() banner:string = "./assets/images/rostov-panorama.png"
}
