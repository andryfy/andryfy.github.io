export class Hotel {
  constructor(
    public id: number,
    public nom: string,
    public img: string,
  ){}

  public static readonly EMPTY_MODEL: Hotel = {
    id: 0,
    nom: '',
    img: ''
  }
}
