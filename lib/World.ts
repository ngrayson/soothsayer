import {Map, Biome, Fauna, Faction, Flora, Landmark, Weather} from './soothsayerInterfaces'

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
    fauna_fauna: Array<Array<number>>,
    fauna_flora: Array<Array<number>>,
    fauna_landmark: Array<Array<number>>,
    fauna_weather: Array<Array<number>>,
    flora_weather: Array<Array<number>>,
    flora_landmark: Array<Array<number>>,
    weather_biome: Array<Array<number>>,
    weather_weather: Array<Array<number>>,
    biome_biome: Array<Array<number>>,
    fauna_biome: Array<Array<number>>,
    flora_biome: Array<Array<number>>,
    biome_landmark: Array<Array<number>>
  }
  constructor(name: string) {
    this.map = {xrange:10,yrange:10,zrange:3}
    this.biomes = []
    this.fauna = []
    this.factions = []
    this.flora = []
    this.landmarks = []
    this.weather = []
    this.relationships = {
      fauna_fauna: [[]],
      fauna_flora: [[]],
      fauna_landmark: [[]],
      fauna_weather: [[]],
      flora_weather: [[]],
      flora_landmark: [[]],
      weather_biome: [[]],
      weather_weather: [[]],
      biome_biome: [[]],
      fauna_biome: [[]],
      flora_biome: [[]],
      biome_landmark: [[]]
    }
  }

}