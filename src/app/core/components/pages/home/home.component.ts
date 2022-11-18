import {Component, OnInit} from "@angular/core";

import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  currentBanner: string = ""

  enterprises: any[] = []
  industries: any[] = []

  constructor(
    private apiService: ApiService
  ) {
  }

  async fetchIndustries() {
    const { industries } = await this.apiService.getIndustries()
    this.industries = industries
  }
  async fetchEnterprises() {
    const { enterprises } = await this.apiService.getAllEnterprises()
    this.enterprises = enterprises
    this.currentBanner = enterprises[0].background_image
  }

  ngOnInit() {
    Promise.all(
      [
        this.fetchIndustries(),
        this.fetchEnterprises()
      ]
    ).then(r => console.log('fetched')).catch(e => console.log('error', e))
  }

}
