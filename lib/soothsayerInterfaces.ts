
// enum EntityRoot {
//   Biome,
//   Landmark,
//   Weather
// }

// type BiomeFrequency = {
//   readonly biome: Biome,
//   readonly frequency: number
// }

// type WeatherModifier = {
//   readonly weather: Weather,
//   readonly modifier: number
// }

// type LandmarkFrequency = {
//   readonly landmark: Landmark,
//   readonly frequency: number
// }

// type Landmark = {
//   readonly name: string,
//   readonly biomeFrequencies?: BiomeFrequency
// }

// type Entity = {
//   readonly name: string,
//   readonly faction?: Faction,
//   readonly behavior: Behavior,
//   readonly root: EntityRoot,
//   readonly biomeFrequencies?: Array<BiomeFrequency>,
//   readonly weatherModifiers?: Array<WeatherModifier>,
//   readonly LandmarkFrequencies?: Array<LandmarkFrequency>,
//   readonly wanderDistance: number
// }

type hex = {
  name?: string,
  x: number,
  y: number,
  biome: Biome
}

type Biome = {
  name: string,
  effects?: any,
  displayColor?: Color,
  icons?: Array<Icon>
}

type Fauna = {
  name: string
}

type Humanoid = Fauna & {
  name: string,
  faction?: Faction
}

type Beast = Fauna & {

}

type ArtificialIntelligence = Fauna & {

}

type Flora = {

}

type Landmark = {
  name: string,
  icon?: Icon
}

type Weather = {

}

type Faction = {}

type Color = {}

type Icon = {}