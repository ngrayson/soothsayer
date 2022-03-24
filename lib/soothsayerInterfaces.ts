export const WORLD_ELEMENT = { // this is not an enum so that it can be accessed by reference via typeof
  Biome: "Biome", 
  Fauna: "Fauna", 
  Flora: "Flora", 
  Landmark: "Landmark", 
  Weather: "Weather", 
  Relic: "Relic", 
  Diety: "Diety", 
  Property: "Property",
} 


export type elementTypes = Biome | Fauna | Flora | Landmark | Weather | Relic | Diety | Property


export type Biome = {
  id:number,
  name: string,
  effects?: any,
  displayColor?: Color,
  icons?: Array<Icon>
}

export type Fauna = {
  id:number,
  name: string
}

export type Humanoid = Fauna & {
  faction?: Faction
}

export type Beast = Fauna & {

}

export type ArtificialIntelligence = Fauna & {

}

export type Flora = {
  id: number,
  name: string

}

export type Landmark = {
  id:number,
  name: string,
  icon?: Icon
}

export type Weather = {
  id: number,
  name: string
}

export type Relic = {
  id: number,
  name: string

}

export type Diety = {
  id: number,
  name: string

}

export type Property = {
  id: number,
  name: string
  
}



export type Faction = {
  id: number,
  name: string

}

export type Color = { // should get an npm thing 
  id: number,
  name: string
}

export type Icon = {
  id: number,
  name: string
}