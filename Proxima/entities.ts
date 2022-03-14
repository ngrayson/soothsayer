
// interface Entity {
//   readonly name: string,
//   readonly faction?: Faction,
//   readonly behavior: string,
//   readonly root: EntityRoot,
//   readonly biomeFrequencies?: Array<BiomeFrequency>,
//   readonly weatherModifiers?: Array<WeatherModifier>,
//   readonly LandmarkFrequencies?: Array<LandmarkFrequency>,
//   readonly wanderDistance: number
// }


let entities: Array<Entity> = [
{
  name: "Proxima Patrol Squadron",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Proxima Scout Pilot",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Prosima Geist",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Proxima Transport Hauler",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Proxima Surveyor",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
  ],
  wanderDistance:0
},
{
  name: "Proxima Researcher",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
  ],
  wanderDistance:0
},
{
  name: "Proxima Ace",
  faction: Faction.Proxima_Primarus,
  behavior: Behavior.Intelligent,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Armored Ice Boar",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Sand Python",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Korax (Great Horned Eagles)",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Wyvern/Talonturkey Herd (Turkey Velociraptors)",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Arrow Finches (Flocking, Dive Bombing, Iron-Hard Beaks)",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Great Antlion Larvae (burrowing, trapping, Mandables)",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Mines,
      frequency: 0
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Great Antlion Female (flying, Hardened Carapace, Mandables)",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
  ],
  wanderDistance:0
},
{
  name: "Gungralisk (Giant Poisonous Toad Sarlaac things)",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "DRAG3N",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Masked Greatstagg [Antlers Mane, Territorial, Leaping]",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Treestoat [Flying, Venomous Fangs, Agile]",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Dire wolf",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Lightning Cicaada Swarm",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Blackford_Island,
      frequency: 5
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
    {
      biome: Biome.Sinclair,
      frequency: 2
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Kraken",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Lancewhale",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Thunder Eel",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "School of Anchorfish",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Icefin Sailfish",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Oomoo [Two tusked, Articulating Plates,  Poison Gas]",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Mines,
      frequency: 0
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Molethk  [mega iron mole, boring, acid]",
  faction: Faction.Megafauna,
  behavior: Behavior.Beast,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Mines,
      frequency: 0
    },
    {
      biome: Biome.Forest_of_Rion,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
    {
      biome: Biome.Mountains,
      frequency: 0
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Lightning_Storm,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Sentinel Enforcer",
  faction: Faction.Sentinels,
  behavior: Behavior.AI,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Heavy_Hail,
      modifier: 0
    },
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Sentinel Scanner (Scout)",
  faction: Faction.Sentinels,
  behavior: Behavior.AI,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Sentinel Type-05 Erectors (builders)",
  faction: Faction.Sentinels,
  behavior: Behavior.AI,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Sentinel Monitors (Traps)",
  faction: Faction.Sentinels,
  behavior: Behavior.AI,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
},
{
  name: "Sentinel Witness (advanced ai, can talk to)",
  faction: Faction.Sentinels,
  behavior: Behavior.AI,
  root: EntityRoot.Biome,
  biomeFrequencies: [
    {
      biome: Biome.Sea_Coast,
      frequency: 0
    },
    {
      biome: Biome.Ashen_Plains,
      frequency: 1
    },
    {
      biome: Biome.Alabon,
      frequency: 0
    },
    {
      biome: Biome.Indrus_Peninsula,
      frequency: 3
    },
  ],
  weatherModifiers: [
    {
      weather: Weather.Frigid_Winds,
      modifier: 0.5
    },
    {
      weather: Weather.Mistrime,
      modifier: 0.5
    },
    {
      weather: Weather.Sheet_Rain,
      modifier: 1
    },
    {
      weather: Weather.Static_Snow,
      modifier: 1
    },
    {
      weather: Weather.High_Clouds,
      modifier: 1
    },
    {
      weather: Weather.Still_Blue,
      modifier: 1
    },
    {
      weather: Weather.Windstorm,
      modifier: 0.5
    },
  ],
  wanderDistance:0
  }
]