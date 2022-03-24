export type Hex = {
  name?: string,
  x: number,
  y: number,
  biome: Biome
}

export type Biome = {
  name: string,
  effects?: any,
  displayColor?: Color,
  icons?: Array<Icon>
}

export type Fauna = {
  name: string
}

export type Humanoid = Fauna & {
  name: string,
  faction?: Faction
}

export type Beast = Fauna & {

}

export type ArtificialIntelligence = Fauna & {

}

export type Flora = {

}

export type Landmark = {
  name: string,
  icon?: Icon
}

export type Weather = {

}

export type Faction = {}

export type Color = {}

export type Icon = {}