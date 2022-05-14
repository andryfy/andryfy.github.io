import { Hotel } from './hotel';
export class Rallonge {
  constructor(
    public id: number,
    public nom: string,
    public hotelList: Hotel[]
  ){}

  public static readonly EMPTY_MODEL: Rallonge = {
    id: 0,
    nom: '',
    hotelList: []
  }
}
