const Property = require('./Property.js')
// a class describing a person, place, or thing, this is extended by other classes
let Entry = class Entry {
  constructor(name, properites) {
    super(name)
    this.name = name
    this.properites = []
    this.parent //pointer to the parent object, should be of the same class as this object
    this.children = [] // aray of pointers to children objects (same class as this object)
  }
  isValidAddition(properties) {
    //properties should be an array of Properties
    //
  }
}

// checks to see if adding a new thing is compatible with what already exists

module.exports = Entry

// if this is a group of people, what are they grouped by?
// ie, common homeland, common beleif, common experience

// an Entry is a person, place, or thing (or group of them)
//   ie. a king, a bridge, the law of magic
// a property is a descriptor of that Entry
//   ie. the soil here is mineral-rich, a person wears a red had
// a parent is which thing the Entry belongs to
//   ie, a person in a faction, a place in a region, one of 7 dwarven rings)
// children is an array of all things which claim this object as their parent

// property filtering
// properties are either strings, entities, or an arrays of strings or entities
// if a property is a string or entity, it is set, cannot be changed, and cannot be changed to an array
// if a property is an array of string, additional strings can be added
// if a property is an array of entries, additional entries can be added as long as they are of the same type

// some things are incompatible, such as
// a place where it is hot year-round cannot have active glaciers (or if it can then that is pretty magical)
// the way we handle this in properties is:
//   if a property key is set to a value, any item which would set the property to a different value is avoided
//   if a property does not exist (is undefined), all values are fair game
//   if a property is set to an array of values, any additional value can be adde
// all properties have value, sourceTable, and sooth

/* for example:
this.properties = {
	climate: {
		value: "cold",
		sourceTable: "sourceTableName",
		sooth: 2,

	},
	naturalOccurances:{
		value: ["ice floes", "snowstorms"]
		sourceTable: "coldProblems",
		sooth: 8
	}
}
For the above climate, something that set climate to "hot" would not be allowed 
but something which set naturalOccurances to "snowstorm" is fine, 
// we expect that the snowstorms happen in the cold portion of the filtering to be done on the generation side
*/
