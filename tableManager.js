const Table = require('./Table')

let tables = []

function newTable(name, entries, extraColumns) {
	let newTable = new Table(name, entries, extraColumns)
	tables.push(newTable)
	return newTable
}

function rollOnTable(table, targetSooth) {
	if (!(table instanceof Table))
		throw `rollOnTable requires a Table class to roll on`

	let res = table.roll()
	let str = res[0]
	let sooth = res[1]

	let leadingIndex
	let laggingIndex

	leadingIndex = str.search(`\\[`)
	while (leadingIndex > -1) {
		laggingIndex = str.search(`\\]`)
		if (laggingIndex <= leadingIndex) {
			console.log('WARNING: Expected ] in table string')
			break
		}
		// get table name
		let tableName = str.substr(
			leadingIndex + 1,
			laggingIndex - leadingIndex - 1
		)
		// get subtable by name
		let subTable = getTableByName(tableName)
		// console.log(subTable)
		// roll on subtable
		let subRes = rollOnTable(subTable)
		let subResStr = subRes[0]
		let subResSooth = subRes[1]
		// replace [tablename] with result
		str = str.replace(`[${tableName}]`, subResStr)
		// add resulting sooth to sooth
		sooth += subResSooth

		leadingIndex = str.search(`\\[`)
	}
	return [str, sooth]
}

function getTableByName(name) {
	const checkName = (table) => {
		return table.name == name
	}
	let res = tables.find(checkName)
	if (res == undefined) console.log(`no table found for ${name}`)
	return res
}

// tables.forEach((table) => {
// 	console.log(`${table.name} vs ${name}`)
// 	if (table.name == name) return table
// 	console.log('no.')
// })
// console.log(`no table was found with name ${name}`)
// return -1
// }

module.exports = {
	newTable,
	rollOnTable,
	getTableByName,
}
