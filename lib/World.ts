type World = {
  name: string,
  map: Array<hex>,
  biomes: Array<Biome>,
  fauna: Array<Fauna>,
  factions?: Array<Faction>,
  flora: Array<Flora>,
  landmarks: Array<Landmark>,
  weather: Array<Weather>,
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
}

type worldGenerator = {
  new (
    name: string,
    map?: Array<hex>,
    biomes?: Array<Biome>,
    fauna?: Array<Fauna>,
    factions?: Array<Faction>,
    flora?: Array<Flora>,
    landmarks?: Array<Landmark>,
    weather?: Array<Weather>
  ): World
};


function baseWorld(name: string): World {
  let newWorldMap: Array<hex> = []
  let newWorldBiomes: Array<Biome> = []
  let newWorldFauna: Array<Fauna> = []
  let newWorldFactions: Array<Faction> = []
  let newWorldFlora: Array<Flora> = []
  let newWorldLandmarks: Array<Landmark> = []
  let newWorldWeather: Array<Weather> = []
  let newWorldRelationships = {
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
  let newWorld = {
    name: name,
    map: newWorldMap,
    biomes: newWorldBiomes,
    fauna: newWorldFauna,
    factions: newWorldFactions,
    flora: newWorldFlora,
    landmarks: newWorldLandmarks,
    weather: newWorldWeather,
    relationships: newWorldRelationships
  }
  return newWorld
}

