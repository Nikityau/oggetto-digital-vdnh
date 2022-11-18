import {nanoid} from "nanoid";
import {Industry} from "../interfaces/industry.interface";

export const IndustryID = {
  METAL: nanoid(),
  ENERGY: nanoid(),
  CHEMISTRY: nanoid(),
  GARDEN: nanoid(),
  LIGHT: nanoid(),
  IT: nanoid()
}
export const industriesModel: Industry[] = [
  {
    id: IndustryID.METAL,
    title: 'Промышленное машиностроение и металлообработка',
    slug: 'prom-ind',
    color_hex: '#0076E3',
  },
  {
    id: IndustryID.ENERGY,
    title: 'Энергетическое машино- и станкостроение',
    slug: 'energy-ind',
    color_hex: '#FFE500'
  },
  {
    id: IndustryID.CHEMISTRY,
    title: 'Химическая промышленность',
    slug: 'chem-ind',
    color_hex: '#FFA800'
  },
  {
    id: IndustryID.GARDEN,
    title: 'Агропромышленный комплекс',
    slug: 'garden-ind',
    color_hex: '#12B064'
  },
  {
    id: IndustryID.LIGHT,
    title: 'Легкая промышленность',
    slug: 'light-ind',
    color_hex: '#FE0000'
  },
  {
    id: IndustryID.IT,
    title: 'IT-индустрия',
    slug: 'it-ind',
    color_hex: '#7000FE'
  },
]
