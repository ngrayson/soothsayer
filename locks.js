const tableManager = require('./tableManager')

// add cause vs ensure

let lock = [
	['find the location of the [noun]', 1],
	['win the trust of a [actor]', 1],
	['cause the dissolution of a faction', 1],
	['cause the safety of the [noun]', 1],
	['cause the creation or re-creation of a faction', 1],
	['cause the destruction of the [noun]', 1],
	['cause the rebirth or creation of the [noun]', 1],
	['cause the destruction of the [noun]', 1],
	['escape the influence of the [noun]', 1],
	['reclaim lost [noun]', 1],
	['bring an [actor] to justice/redeem them', 1],
	['hide the location of [noun]', 1],
	['remove an [actor] from power', 1],
	['empower an [actor]', 1],
	['make sure an event goes smoothly', 1],
	['ruin an event', 1],
	['reduce the power of an [actor]', 1],
	['spolve a mystery/riddle', 1],
	['rid the [noun] of corruption', 1],
	['corrupt the [noun]', 1],
	['salvage the relationship between an [actor] and an [actor]', 1],
	['prevent the theft of the [noun]', 1],
	['fool the [actor]', 1],
	['prevent the [actor] from solving a mystery', 1],
	['keep the [actor] calm', 1],
	['travel to location', 1],
	['avoid the [noun]', 1],
	['obtain the item', 1],
	['get advice from the [actor]', 1],
	['ally yourself with the [actor]', 1],
]

let noun = [
	//the [noun]
	['[nounSingular]', 1],
	['[nounPlural]', 2],
]

let nounSingular = [
	//the [noun]
	['entity', 1],
	['location', 1],
	['item', 1],
]
let nounPlural = [
	//the [noun]
	['faction', 1],
	['locations', 3],
	['group of objects', 2],
]

let actor = [
	['entity', 1],
	['faction', 1],
]

let stakes = [
	['they will destroy the world', 1],
	['we all will die', 1],
	["we're all doomed", 1],
	["There'll be no more vegetable contests", 1],
	['I wont have any money to pay you', 1],
	['The entire town will starve', 1],
	['War will break out', 1],
	['Alliances will fall', 1],
	['A civil war will erupt', 1],
	['We will see a string of murders', 1],
	['Our gods will no longer protect us', 1],
	['A new power will rise', 1],
]

let step = [
	// we will get
	['a hint to the next thing', 1],
	['the thing we seek', 1],
	['a plan b', 1],
	['immunity', 1],
	['a better positive outcome but a worse potential negative outcome', 1],
	['some time to spare', 1],
	['a powerful ally', 1],
	['to go back in time', 1],
	["to learn it's secrets", 1],
	['to act unseen', 1],
	["to learn it's weakness", 1],
	['to learn how to unlock the true power', 1],
	['a great item', 1],
	['to open an alternative path through', 1],
]

let plot = [
	[
		'ultimately, we must [lock], but if we [lock] first, we will get [step]',
		1,
	],
]

tableManager.newTable('lock', lock)
tableManager.newTable('noun', noun)
tableManager.newTable('nounSingular', nounSingular)
tableManager.newTable('nounPlural', nounPlural)
tableManager.newTable('actor', actor)
tableManager.newTable('stakes', stakes)
tableManager.newTable('step', step)
let plotTable = tableManager.newTable('plot', plot)
/*
    ['group of items'],
    ['group'],*/

let res = tableManager.rollOnTable(plotTable)
console.log(res)
