import axios from "axios";

import {IApi} from "./api.interface";

export class ApiMock implements IApi {
  async getIndustries() {
    const { data } = await axios.get('/api/industries')
    return data
  }

  async getAllEnterprises() {
    const { data } = await axios.get('/api/enterprises')
    return data
  }
}
