const Entity = require('./Entity')
// a class describing a location or group of locations
let Location = class Location extends Entity {}

module.exports = Location

/*
climate
	summer/winter humidity
	summeer/winter temperature
geography
	mountainous/coastal/plains
		subtypes of those^
	ground type
		igneous, metamorphic, sedentary
names
	name, language
occurences
	must be compatible with climate, geography
*/
