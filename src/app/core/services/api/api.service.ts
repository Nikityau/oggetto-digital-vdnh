import {Injectable} from "@angular/core";

import {IApi} from "./api.interface";

import {ApiMock} from "./api.mock";

@Injectable({providedIn: 'root'})
export class ApiService {
  private api: IApi = new ApiMock()

  async getIndustries() {
    const resp = await this.api.getIndustries()

    return resp
  }
  async getAllEnterprises() {
    const resp = await this.api.getAllEnterprises()

    return resp
  }
}
