import {nanoid} from "nanoid";

import {Enterprise} from "../interfaces/enterprise.interface";

export const enterprises: Enterprise[] = [
  {
    id: nanoid(),
    title: 'ростсельмаш',
    icon: '../../../assets/icons/companies/rostselmash.png',
    background_image: '../../../assets/images/companies/rostselmash.png',
    industry_slug: 'prom-ind'
  },
  {
    id: nanoid(),
    title: 'elis',
    icon: '../../../assets/icons/companies/elis.png',
    background_image: '../../../assets/images/companies/elis.png',
    industry_slug: 'prom-ind'
  },
  {
    id: nanoid(),
    title: 'оджетто',
    icon: '../../../assets/icons/companies/oggetto.png',
    background_image: '../../../assets/images/companies/oggetto.png',
    industry_slug: 'it-ind'
  },
]
