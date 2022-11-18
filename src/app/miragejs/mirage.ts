import {createServer, Response} from 'miragejs'

import {industriesModel} from "../data/data/industries-model";
import {enterprises} from "../data/data/industries-companies";

export function mirage() {
  createServer({
    routes() {
      this.namespace = '/api'
      this.get('/industries', () => {
        return new Response(200, {}, {
          industries: industriesModel
        })
      })
      this.get('/enterprises', () => {
        return new Response(200, {}, {
          enterprises: enterprises
        })
      })

    }
  })
}
