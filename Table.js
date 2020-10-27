const { editEntry } = require('../../db/db')

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
		if (typeof name != 'string')
			throw `Tables require a name of type string, not ${typeof name}`
		this.name = name

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
	roll() {
		let roll = Math.floor(Math.random() * this.entries.length)
		let result = this.entries[roll]
		return result
	}
	roll(targetSooth) {
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

function soothDist(entries) {
	// return an object with avg, min, max, std dev, array of all the stuff sucsh that a chart could be made
	// this has to be calculated recursively, but also leaves the option of infinite loops
}

module.exports = Table
