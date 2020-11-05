const tableManager = require('./tableManager')
const environmentTables = require('./environmentTables')

let tables = {}

tables.completeCulture = [
	['Environment:\n[environment]\nEconomics:\n[economics]', 0],
]

tables.culturalElements = [
	['[environment]', 0],
	['[economics]', 0],
	['[class]', 0],
	['[governance]', 0],
	['[religion]', 0],
	['[kinship]', 0],
	['[magicality]', 0],
	['[change]', 0],
	['[size]', 0],
]

const initializeEconomics = () => {
	tables.economics = [
		[
			'Currency: [currency]\n[marketplaceStyle]\n' + 'Resource:\n[resource]',
			1,
		],
	]

	tables.currency = [
		['they use the currency of another land', 0],
		['they use the common currency', 0],
		['they use their own currency (one of their resource)', 1],
		['much of trade is done on the basis of favors and reciprocity', 13],
		[
			'basic needs are free but everyone must spend half the year working on [duty]',
			21,
		],
	]

	tables.duty = [
		['maintanence and construction of public goods', 2],
		['religious ceremonies which provide food and upkeep', 2],
		['their caste responsibilities which enable their way of life', 2],
	]

	tables.marketplaceStyle = [
		[
			'Goods are purchased from individual shops scattered throughout each settlement',
			1,
		],
		[
			'Goods are purchased from centralized massive bazaars in each settlement',
			1,
		],
		['Basic goods are free and provisioned by a central authority', 5],
		['Goods are purchased from  a for-profit delivery organization', 8],
	]

	tables.resource = [
		['[naturalResource] which is/are used [resourceUse]', 5],
		[
			'[naturalResource] which is/are used [resourceUse]\n[naturalResource] which is/are used [resourceUse]',
			2,
		],
		[
			'[naturalResource] which is/are used [resourceUse]\n[naturalResource] which is/are used [resourceUse]\n[naturalResource]',
			3,
		],
		['[technologicResource] which is/are used [resourceUse]', 21],
		[
			'[naturalResource] which is/are used [resourceUse]\n[technologicResource] which is/are used [resourceUse]',
			8,
		],
		[
			'[naturalResource] which is/are used [resourceUse]\n[naturalResource] which is/are used [resourceUse]\n[technologicResource] which is/are used [resourceUse]',
			13,
		],
	]

	tables.naturalResource = [
		['[bioticResource]', 2],
		['[abioticResource]', 3],
	]

	tables.bioticResource = [
		['[animalResource]', 1],
		['useful or significant plant [plantResource]', 1],
	]

	tables.animalResource = [
		['useful or significant  [usefulAnimal]', 5],
		['useful or significant  animal [usefulAnimalByproduct]', 2],
		['useful or significant animal [usefulAnimalPart]', 3],
	]

	tables.usefulAnimal = [
		['trained burden animals', 3],
		['trained hunting animals', 8],
		['trained communication animals', 8],
		['bred animals/bugs which produce byproducts', 8],
		['bred animals/bugs which contribute to agriculture', 8],
	]

	tables.usefulAnimalByproduct = [
		['milk', 3],
		['cheese', 3],
		['excretions (coffee, guano, etc.)', 5],
		['eggs', 2],
		['feathers', 2],
		['silk', 5],
		['honey', 5],
	]

	tables.usefulAnimalPart = [
		['furs', 1],
		['skins', 1],
		['scales', 5],
		['shells', 5],
		['meats', 2],
		['bones', 3],
		['horns', 5],
		['sinew', 3],
		['special organs', 8],
	]

	tables.plantResource = [
		['leaves', 1],
		['pollen', 3],
		['fruits', 2],
		['vegetables', 1],
		['seeds', 1],
		['beans', 2],
		['wood', 1],
		['bark', 2],
		['sap', 3],
		['flowers', 1],
		['plants taller than buildings', 3],
	]

	tables.abioticResource = [
		['ore', 1],
		['gems', 1],
		['oil', 1],
		['wind', 21],
		['natural landmarks', 3],
		['naturally occuring "magic"', 3],
	]

	tables.technologicResource = [
		['a massive knowledgebase', 3],
		['applied sciences (architecture, alchemy, aggriculture, etc.)', 3],
		['artistic craftspeople', 3],
		['hospitality specialists', 3],
		['mercenaries', 5],
		['trade', 2],
		['soothsaying', 8],
		['music', 3],
		['shipwrighting', 5],
		['celestial navigation', 8],
		['compass crafting', 3],
		['metallurgy', 3],
		['architecture', 2],
		['advanced agricultural methods', 5],
		['wagonwrighting', 3],
		['pottery', 5],
		['water wheels', 5],
		['windmills', 3],
		['pulley systems', 8],
		['wellmaking', 8],
		['bridgebuilding', 3],
		['textiles', 3],
		['papercrafts', 8],
		['cartography', 8],
		['clockmaking', 5],
		['explosives', 3],
		['pumpcrafting', 5],
		['showwers and bathhouses', 13],
		['roadbuilding', 5],
		['acqueducts', 5],
		['harbours', 3],
		['reservoirs', 3],
		['dams', 8],
		['glass blowing', 5],
		['concrete', 13],
		['steam engines', 21],
		['irrigation and drainage canals', 8],
		['communication technologies', 5],
		['press printing', 5],
		['martial arts', 5],
		['food preservation', 3],
		['weaponcrafting', 3],
		['armorcrafting', 3],
		['shieldcrafting', 3],
		['seige weapons', 8],
	]

	tables.resourceUse = [
		//this resource is used
		['in daily life', 1],
		['in art', 1],
		['in the production of most goods', 3],
		['in infrastructure', 2],
		['for public goods', 13],
		['by only the elite', 5],
		['in sacred ceremony', 5],
	]
}

initializeEconomics()

// console.log(tables)
Object.entries(tables).forEach((table) => {
	tableManager.newTable(table[0], table[1])
})
let res = tableManager.rollTablebyName('completeCulture')
console.log(`sooth: ${res[1]}`)
console.log(res[0])
