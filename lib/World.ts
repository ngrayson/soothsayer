import { Map } from './Map'
import math, { Matrix } from 'mathjs'
import {Biome, Fauna, Faction, Flora, Landmark, Weather} from './soothsayerInterfaces'

class World {
  name: string
  map: Map
  biomes: Array<Biome>
  fauna: Array<Fauna>
  factions?: Array<Faction>
  flora: Array<Flora>
  landmarks: Array<Landmark>
  weather: Array<Weather>
  relationships: {
    fauna_fauna: Matrix,
    fauna_flora: Matrix,
    fauna_landmark: Matrix,
    fauna_weather: Matrix,
    flora_weather: Matrix,
    flora_landmark: Matrix,
    weather_biome: Matrix,
    weather_weather: Matrix,
    biome_biome: Matrix,
    fauna_biome: Matrix,
    flora_biome: Matrix,
    biome_landmark: Matrix
  }
  constructor(name: string) {
    this.name = name
    this.map = new Map
    this.biomes = []
    this.fauna = []
    this.factions = []
    this.flora = []
    this.landmarks = []
    this.weather = []
    this.relationships = {
      fauna_fauna: math.matrix(),
      fauna_flora: math.matrix(),
      fauna_landmark: math.matrix(),
      fauna_weather: math.matrix(),
      flora_weather: math.matrix(),
      flora_landmark: math.matrix(),
      weather_biome: math.matrix(),
      weather_weather: math.matrix(),
      biome_biome: math.matrix(),
      fauna_biome: math.matrix(),
      flora_biome: math.matrix(),
      biome_landmark: math.matrix()
    }
  }

  setName = (newName: string) => this.name = newName
  
  setMap = (newMap: Map) => this.map = newMap

  addBiome = (biome: Biome) => {
    // add biome to biome array
    // add biome column and row to biome-related matricees
  }

  removeBiome = (biome: Biome) => {
    // find biome in biome array
    // remove biome columns and rows from biome-related matricees
    // 
  }

  validate = () => {
    // validate differente parts of the world
    // length of list of stuff and dimensions of arrays
  }
}