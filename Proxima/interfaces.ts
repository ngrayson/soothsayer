enum Faction {
  Proxima_Primarus,
  Sentinels,
  Millmen,
  Megafauna
}

enum Behavior {
  Intelligent,
  Beast,
  AI
}

enum Biome {
  Sea_Coast,
  Ashen_Plains,
  Blackford_Island,
  Alabon,
  Forest_of_Rion,
  Indrus_Peninsula,
  Sinclair,
  Mountains,
  Mines
}

enum Weather {
  Heavy_Hail,
  Lightning_Storm,
  Frigid_Winds,
  Mistrime,
  Sheet_Rain,
  Static_Snow,
  High_Clouds,
  Still_Blue,
  Windstorm,
  Snowstorm
}

enum EntityRoot {
  Biome,
  Landmark,
  Weather
}

interface BiomeFrequency {
  readonly biome: Biome,
  readonly frequency: number
}

interface WeatherModifier {
  readonly weather: Weather,
  readonly modifier: number
}

interface LandmarkFrequency {
  readonly landmark: Landmark,
  readonly frequency: number
}

interface Landmark {
  readonly name: string,
  readonly biomeFrequencies?: BiomeFrequency
}

interface Entity {
  readonly name: string,
  readonly faction?: Faction,
  readonly behavior: Behavior,
  readonly root: EntityRoot,
  readonly biomeFrequencies?: Array<BiomeFrequency>,
  readonly weatherModifiers?: Array<WeatherModifier>,
  readonly LandmarkFrequencies?: Array<LandmarkFrequency>,
  readonly wanderDistance: number
}