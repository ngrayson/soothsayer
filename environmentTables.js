const tableManager = require('./tableManager')

// This is not about biomes, this is about how environemnt
// might affect a culture in the following ways
//  envoronment-related issues (which people can adapt to)
//  environment-related opportunities
/*
climates are broken into patterns of rainfall and temperature
combine those patterns with
    elevation
    geography (shape of land like mountainous)
    Rock Type (this is very reductive)
to get an output biome, including flora

of resulting biome, where might settlements be
ie. 
A coastal harbor.
A calm, coastal bay.
A large freshwater lake.
A wide, navigable river.
A river navigable by small craft.
The mouth of a river or a river delta.
The confluence of two rivers.
A series of natural springs.
A well-traveled crossroads.
A water source and a well-traveled road
*/
let tables = {}
tables.formalBiomeNames = [
	['Ice Cap', 8],
	['Polar Desert', 5],
	['Wet Tundra', 3],
	['Tundra', 3],
	['Bog', 3],
	['Boreal Forest', 1],
	['Cool Desert', 3],
	['Temperate Rainforest', 2],
	['Temperate Woodlands', 1],
	['Steppe', 1],
	['Temperate Woodlands', 1],
	['Temperate Forest', 1],
	['Marsh', 2],
	['Desert', 3],
	['Arid Desert', 5],
	['Subtropical Scrubland', 1],
	['Savannah', 2],
	['Subtropical Forest', 1],
	['Subtropical Wetlands', 1],
	['Subtropical Dry Forest', 1],
	['Subtropical Rainforest', 1],
	['Tropical Dry Forest', 1],
	['Tropical Woodlands', 1],
	['Tropical Rainforest', 1],
	['Tropical Wetlands', 1],
	['Tropical Scrub', 1],
]

tables.humidity = [
	// this area is subject to a [humidityProblem] [adaptation]
	[
		'Monsoon Season in the winter, dry summers, this causes [monsoonProblem] [adaptation]',
		5,
	],
	[
		'Lots of rain, less in the summer, this causes [temperateProblem] [adaptation]',
		2,
	],
	[
		'Rainfall during all months, this causes [tropicalProblem] [adaptation]',
		2,
	],
	['Mostly Dry year-round, this causes [desertProblem] [adaptation]', 3],
	['Frequent heavy fog', 3],
]

tables.temperature = [
	['Hot in the day, cold at night, with [desertProblem] [adaptation]', 3],
	[
		'Hot Summers, cold winters, resulting in summer [desertProblem] [adaptation]. In the winter, there is a [coldProblem] [adaptation]',
		21,
	],
	['Cold Winters, resulting in a [coldProblem] [adaptation]', 2],
	['Hot Summers, resulting in a [desertProblem] [adaptation]', 2],
	['Hot Year-Round, resulting in a [desertProblem] [adaptation]', 5],
	['Cold Year-Round, resulting in a [coldProblem] [adaptation]', 5],
]

tables.animalProblem = [
	['aggressive hunting animals', 5],
	['yearly great migration of smaller creatures', 5],
	['pest plague', 5],
]

tables.desertProblem = [
	['wild fires', 2],
	['landslides when it does rain', 2],
	['drought', 3],
	['solar radiation', 5],
	['scarcity of flora', 1],
	['scarcity of fauna', 1],
	['sandstorms', 1],
]

tables.coldProblem = [
	['ice floes', 5],
	['glacial advance', 8],
	[
		'winter water freezing, creating land bridges and resulting in the presence of [animalProblem] [adaptation]',
		3,
	],
	[
		'summer ice melting, creating new waterways and resulting in the presence of [animalProblem] [adaptation]',
		3,
	],
]

tables.temperateProblem = [
	['regular tornadoes', 1],
	['regular severe thundertorms', 1],
	['mudslides', 1],
	['dustStorms', 2],
]

tables.monsoonProblem = [
	['severe thundertorms', 1],
	['flooding', 1],
	['widespread floral rot', 3],
	['mudslides', 1],
]

tables.tropicalProblem = [
	['severe thundertorms', 1],
	['rare hurricanes', 1],
	['frequent hurricanes', 13],
	['mudslides', 1],
]

tables.coastalProblem = [
	['surging tides', 2],
	['destructive sea storms', 2],
	['marine layer of heavy fog', 1],
]

tables.rock = [
	['[sedementaryGeography] and is rich with [sedementaryResource]', 0],
	['[metamorphicGeography] and is rich with [metamorphicResource]', 0],
	['[igneousGeography] and is rich with [igneousResource]', 0],
]

tables.sedementaryGeography = [
	['underground caves', 5],
	['karst pillars', 8],
	['sinkholes', 5],
	['sinking streams', 5],
	['springs', 5],
	['caves', 5],
	['rock arches', 8],
	['canyons', 3],
]

tables.sedementaryResource = [
	['salt', 1],
	['sulfur', 1],
	['Iorn', 1],
	['Chalk', 1],
	['shale', 1],
	['coal', 1],
]

tables.metamorphicGeography = [
	['steep cliffs/mountains', 3],
	['glaciers', 8],
	['glacial valleys', 5],
]

tables.metamorphicResource = [
	['marble', 1],
	['quartz', 1],
	['slate', 1],
]

tables.igneousGeography = [
	['waterfalls', 3],
	['lava flows', 8],
	['hotsprings', 5],
	['gyesers', 5],
	['volcano', 5],
]

tables.igneousResource = [
	['Obsidian', 1],
	['basalt', 1],
]

tables.geographyFeature = [
	// this area is dominated by [geographyFeature]
	['foot hills', 1],
	['a mountian range', 1],
	['towering mountains', 1],
	['rolling hills', 1],
	['endless plains', 1],
	['the winding coastline', 1],
	['a valley', 1],
	['a river', 1],
	['islands', 1],
]

tables.geographyProblem = [
	//they have issues with [geologic problem] [adaptation]
	['sun damage to skin and eyes from living in High Elevation', 2],
	['exposure to toxic natural gasses nearby', 5],
	['volcanic erruptions, rarely', 3],
	['regular volcanic erruptions', 21],
	['frequent earthquakes', 5],
]

tables.atmospheric = [
	['aurora,', 5],
	['gales,', 2],
	['colored lightning', 13],
]

tables.geography = [
	['This area is dominated by [geographyFeature] and [rock] ', 0],
]

tables.environment = [
	[
		'Humidity:\n[humidity]\n' +
			'Temperature:\n[temperature]\n' +
			'Geography:\n[geography]',
		0,
	],
]

if (tableManager.getTableByName('resource'))
	tables.adaptation = [
		['which is hard for the local population', 0],
		[
			'which the local people are attempting to counteract with [resource]',
			0,
		],
		['which the local people have overcome with use of [resource]', 0],
	]
else tables.adaptation = [['', 0]]

const loadTables = () => {
	Object.entries(tables).forEach((table) => {
		tableManager.newTable(table[0], table[1])
	})
}

loadTables()
// let res = tableManager.rollTablebyName('environment')
// console.log(`sooth: ${res[1]}`)
// console.log(res[0])

module.exports = loadTables
//roll
// humidity, temperature, geography

// want problems which have forced adaptation and opportunities for people to build off of
