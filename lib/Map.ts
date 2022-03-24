export class Map{
  name?: string
  xlength: number
  ylength: number
  zlength: number
  constructor() {
    this.xlength = 10
    this.ylength = 10
    this.zlength = 10
  }
  constructor(xlength: number, ylength: number, zlength: number) {
    this.xlength=xlength
    this.ylength=ylength
    this.zlength=zlength
  }
}