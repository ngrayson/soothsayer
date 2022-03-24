import {Biome} from './soothsayerInterfaces'

export type Hex = {
  name?: string,
  x: number,
  y: number,
  biome: Biome
}
export class Map{
  name?: string
  xlength: number
  ylength: number
  zlength: number
  constructor(name?: string, xlength?: number, ylength?: number, zlength?: number) {
    this.name = name ? name : undefined
    this.xlength = xlength ? xlength : 10
    this.ylength = ylength ? ylength : 10
    this.zlength = zlength ? zlength : 10
  }
}