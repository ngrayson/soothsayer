// a class describing a person, place, or thing, this is extended by other classes
let Entity = class Entity {
	constructor(name, properites) {
		super(name)
		this.name = name
		this.properites = properties
		this.parent //pointer to the parent object, should be of the same class as this object
		this.children = [] // aray of pointers to children objects (same class as this object)
	}
}

module.exports = Entity

// if this is a group of people, waht are they grouped by?
// ie, common homeland, common beleif, common experience

// an entity is a person, place, or thing (or group of them)
//   ie. a king, a bridge, the law of magic
// a property is a descriptor of that entity
//   ie. the soil here is mineral-rich, a person wears a red had
// a parent is which thing the entity belongs to
//   ie, a person in a faction, a place in a region, one of 7 dwarven rings)
// children is an array of all things which claim this object as their parent

// property filtering
// some things are incompatible, such as
// a place where it is hot year-round cannot have active glaciers (or if it can then that is pretty magical)
// the way we handle this in properties is:
//   if a property key is set to a value, any item which would set the property to a different value is avoided
//   if a property does not exist (is undefined) OR is an array of values, all values are fair game
//   if a property is set to an array of
// all properties (and child properties) have value, sourceTable, and sooth, along with any child properties

/* for example:
climate: {
	value: "cold",
	sourceTable: "sourceTableName",
	sooth: 2,
	occurances:{
		value: ["ice floes", "snowstorms"]
		sourceTable: "coldProblems",
		sooth: 8
	}
}
For the above climate, something that set climate to "hot" would not be allowed 
but something which set climate.occurances to "snowstorm"
*/
