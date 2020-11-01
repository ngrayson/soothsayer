// const { editEntry } = require('../../db/db')

/* 
    All tables have
        names
        sooth
        extra columns


    when rolling on tables
        prevent infinite loops
        track sooth
        eventually, aim for a target sooth

*/
let Table = class Table {
	constructor(name, entries, extraColumns) {
		console.log(`building ${name}`)
		if (typeof name != 'string')
			throw `Tables require a name of type string, not ${typeof name}`
		this.name = name

		if (!extraColumns) extraColumns = []

		for (let entryIndex = 0; entryIndex < entries.length; entryIndex++) {
			let entry = entries[entryIndex]

			if (typeof entry[0] != 'string')
				throw `Each entry must have a nanme of type string, entry ${entryIndex} has type ${typeof entry[0]}`

			if (typeof entry[1] != 'number')
				throw `Each entry must have a sooth of type number, entry ${entryIndex} has type ${typeof entry[0]}`

			if (extraColumns.length + 2 != entry.length) {
				throw `Incomplete table, each entry must have all columns filled`
			}
		}
		this.entries = entries
		this.soothDist
	}
	roll(targetSooth) {
		if (!targetSooth) {
			console.log('rolling')
			let roll = Math.floor(Math.random() * this.entries.length)
			let result = this.entries[roll]
			return result
		}
		// logic for this is pretty shitty, behaves like a max instead
		let numTries = 0
		let currentSooth = 99999
		while (currentSooth > targetSooth || numTries < 8) {
			let roll = Math.floor(Math.random() * this.entries.length)
			let result = this.entries[roll]
			currentSooth = result[1]
			numTries++
		}
	}
}

function soothDist(table) {
	// return an object with avg, min, max, std dev, array of all the stuff sucsh that a chart could be made
	// this has to be calculated recursively, but also leaves the option of infinite loops
	let tableStack = [] // the current stack of tables, if something detects a duplicate then fix it
	let soothDist = [[]] //3xN array, column 1 is sooth result, column 2 is likelihood, 3 is str
	// get to each leaf node, figure out % chance of it happening, what it's sooth would be, add it to list
	let likelihood = 1
	let soothSum = 0
	let soothDist = calcSoothDist(
		table,
		soothDist,
		tableStack,
		likelihood,
		soothSum,
		str
	)
}

function calcSoothDist(
	table,
	soothDist,
	tableStack,
	likelihood,
	soothSum,
	str
) {
	// if tablestack has this table in it
	// do something
	// else
	// tablestack.push(table)
	// for each element in this table
	// let nodeLikelihood = likelihood / table.entries.length
	// let nodeSooth = soothSum + entry.sooth
	// let nodeStr =
	// if leaf node
	// soothDist.push([nodeSoothCumulativeSum, nodeCumulativeLikelihood, str])
	// return soothDist
	// if it isn't a leaf node
	// soothDist = calcSoothDist(subTable, soothDist, tableStack, nodeLikelihood, nodeSooth, nodeStr)
}
module.exports = Table
