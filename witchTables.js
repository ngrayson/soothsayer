const tableManager = require('./tableManager')

let witchEntries = [
	['A [witchBase]', 1],
	['A [witchBase] with [witchDetail]', 2],
	['A [witchBase] with [witchDetail] and [witchDetail]', 2],
	['A [witchBase] with [witchDetail] on [witchTransportation]', 13],
	[
		'A [witchBase] with [witchDetail] and [witchDetail] riding [witchTransportation]',
		13,
	],
	['A [witchBase] with a [familiar]', 2],
	['A [witchBase] with [witchDetail] accompanied by a [familiar]', 3],
	[
		'A [witchBase] with [witchDetail] and [witchDetail] accompanied by a [familiar]',
		3,
	],
	[
		'A [witchBase] with [witchDetail] on [witchTransportation] accompanied by a [familiar]',
		13,
	],
	[
		'A [witchBase] with [witchDetail] and [witchDetail] riding [witchTransportation] accompanied by a [familiar]',
		21,
	],
]

let witchBaseEntries = [
	['[witchAppearance]', 1],
	['[witchProfession]', 1],
]

let witchAppearanceEntries = [
	['[bipedShape] woman', 1],
	['beautiful lady', 2],
	['sweet old woman', 2],
	['wretched woman', 3],
	['young girl claiming to be 300 years old', 13],
	['an old warty woman', 3],
]

let witchProfessionEntries = [
	['shifty seamstress', 2],
	['boisterous brewer', 3],
	['bespectacled botanist', 5],
	['tawny tavernkeeper', 5],
	['flamboyant fortuneteller', 8],
	['pensive potionseller', 8],
	['narcissistic noblewoman', 3],
	['apocryphal apothecary', 2],
]

let bipedShapeEntries = [
	['tall', 1],
	['short', 2],
	['thin', 1],
	['rotund', 1],
]

let witchDetailEntries = [
	// with [witchDetail]
	['a crooked smile', 1],
	['no shadow', 5],
	['a shadow of [creepyCreature]', 8],
	['a wide brimmed dark hat', 2],
	['a flowing dark robe', 1],
	['deep black spectacles', 1],
	['a host of [flyingCreatureSwarm]', 8],
	['a hut made of [wiccanBuildingMaterial]', 3],
	['dichromatic eyes', 5],
	['eyes like a [creepyCreature]', 5],
	['a tattoo of [tattoo] on her [tattooLocation]', 2],
	['hair like [wiccanBuildingMaterial]', 2],
	['a patchwork cloak', 1],
	['a ever beating heart in a brass birdcage', 13],
	['a crown of [creepyCreature]s', 8],
	['a [creepyCreature] brooch', 5],
]

let tattoEntries = [
	['the moon', 5],
	['a [creepyCreature]', 3],
	['a wreath of skulls', 5],
	['a rusted dagger', 3],
	['a three-headed [creepyCreature]', 5],
	['three [creepyCreature]s staring at the moon', 3],
	['a functional mirror', 21],
]

let tattooLocationEntries = [
	// on his/her [tattoo location]
	['shoulder', 1],
	["neck's nape", 3],
	['ring finger', 3],
	['collarbone', 3],
	['left wrist', 2],
	['brow', 2],
]

let familiarEntries = [
	['fat pidgeon', 6],
	['[creepyCreature]-mounted [creepyCreature', 21],
	['mouse wearing the same outfit', 13],
	['fat black shiba', 3],
	['enchanted gourd', 5],
	['black cat', 2],
	['hairy bat', 3],
	['[wiccaDescriptor] [creepyCreature]', 5],
]

let flyingCreatureSwarmEntries = [
	['fireflies', 3],
	['bats', 2],
	['blue will-o-wisps', 8],
	['miniature dragons', 13],
	['ghostly [creepyCreature]s', 21],
]

let witchTransportationEntries = [
	['a flying broom', 1],
	['a flying broom of [wiccanBuildingMaterial]', 2],
	['a levitating cauldron with a recliner inside', 13],
	['an animated [creepyCreature] made of [wiccanBuildingMaterial]', 21],
	[
		'an animated [creepyCreature] made of [wiccanBuildingMaterial] and [wiccanBuildingMaterial]',
		21,
	],
	['a cloud of [flyingCreatureSwarm]', 8],
]

let creepyCreatureEntries = [
	// a [creepyCreature]
	['spider', 1],
	['mantis', 3],
	['cobra', 2],
	['cockroach', 2],
	['centipede', 3],
	['crow', 2],
	['raven', 3],
	['cat', 2],
	['reverse mer-shark', 13],
	['black dog', 2],
	['wolf', 3],
	['moth', 3],
	['porcupine', 3],
	['rat', 2],
	['bat', 3],
	['wax mommets', 2],
]

let wiccaDescriptorEntries = [
	['plagued', 3],
	['venomous', 3],
	['shadowy', 2],
	['blood-red', 2],
]

let wiccanBuildingMaterialEntries = [
	['dried grass', 1],
	['twine', 1],
	['[bone]', 3],
	['brambles', 1],
	['thorns', 2],
	['petrified [creepyCreature]s', 8],
]

let boneEntries = [
	['chicken bone', 1],
	['human vertebrae', 5],
	['giant ribs', 8],
]

let witchTable = tableManager.newTable('witch', witchEntries)
let witchTransportTable = tableManager.newTable(
	'witchTransportation',
	witchTransportationEntries
)

let wiccanBuildingMaterialTable = tableManager.newTable(
	'wiccanBuildingMaterial',
	wiccanBuildingMaterialEntries
)
let boneTable = tableManager.newTable('bone', boneEntries)
let witchBaseTable = tableManager.newTable('witchBase', witchBaseEntries)
let witchAppearanceTable = tableManager.newTable(
	'witchAppearance',
	witchAppearanceEntries
)
let witchProfessionTable = tableManager.newTable(
	'witchProfession',
	witchProfessionEntries
)
let bipedShapeTable = tableManager.newTable('bipedShape', bipedShapeEntries)
let wiccaDescriptorTable = tableManager.newTable(
	'wiccaDescriptor',
	wiccaDescriptorEntries
)
let tattooTable = tableManager.newTable('tattoo', tattoEntries)
let tattooLocationTable = tableManager.newTable(
	'tattooLocation',
	tattooLocationEntries
)
let familiarTable = tableManager.newTable('familiar', familiarEntries)
let creepyCreatureTable = tableManager.newTable(
	'creepyCreature',
	creepyCreatureEntries
)
let witchDetailTable = tableManager.newTable('witchDetail', witchDetailEntries)
let flyingCreatureSwarmTable = tableManager.newTable(
	'flyingCreatureSwarm',
	flyingCreatureSwarmEntries
)

let res = tableManager.rollOnTable(witchTable)
console.log(res)
