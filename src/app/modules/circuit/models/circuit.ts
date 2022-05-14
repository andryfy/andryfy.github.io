export class Circuit {
  constructor(
    public id: number,
    public nom: string,
    public description: string,
    public prix: number,
    public img: any,
    public etapeList: any[]
  ){}

  public static readonly EMPTY_MODEL: Circuit = {
    id: 0,
    nom: '',
    description: '',
    prix: 0,
    img: null,
    etapeList: []
  }
}
