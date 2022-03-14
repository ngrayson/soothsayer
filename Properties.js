const Table = require('./Table.js')
// a class describing properties which belong to a person, place, or thing
let Property = class Property {
  constructor(name, value, sourceTable, sooth) {
    if (typeof name == 'string') this.name = name
    else throw 'name must be of type string but was of type ' + typeof name
    if (typeof value == 'string') this.value = value
    else throw 'value must be of type string but was of type ' + typeof value
    if (typeof sourceTable == 'string') this.sourceTable = sourceTable
    else
      throw (
        'sourceTable must be of type string but was of type ' +
        typeof sourceTable
      )
    if (typeof sooth == 'number') this.sooth = sooth
    else throw 'sooth must be of type number but was of type ' + typeof sooth
  }
}
module.exports = Property
