// a class describing a person, place, or thing, this is extended by other classes
let Entity = class Entity {
	constructor(name, properites) {
		super(name)
		this.name = name
		this.properites = properties
		this.parent //pointer to the parent object, should be of the same class as this object
		this.children = [] // aray of pointers to children objects (same class as this object)
		this.tags = [] // any tags that this object has
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
// tags is an array of descriptors
