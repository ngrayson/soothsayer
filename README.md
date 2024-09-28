# Soothsayer

Soothsayer is a Procedural Generator inspired by [The Annals of the Parrigues](https://www.youtube.com/watch?v=narjui3em1k) by Emily Short.

It works by combining user-defined random tables through a procedural grammar and the use of a 'sooth' index to determine how crazy (or 'oracular') a specific result is.

The results of these tables are intended to be inspiring, as well as more fine-tunable as the user can define more strongly/specifically flavored tables.

## Examples

### Output

#### Witches
sooth: 22 'A young girl claiming to be 300 years old with a fat pidgeon', 

sooth: 42 'A flamboyant fortuneteller with no shadow and no shadow riding a cloud of bats',
  
sooth: 7  'A rotund woman with a black cat', 

sooth: 18 'A tawny tavernkeeper with a porcupine brooch and a wide brimmed dark hat',

#### Cultures
Sooth: 97
- Environment:
  - Humidity:
    - Mostly Dry year-round, this causes solar radiation
  - Temperature:
    - Hot Summers, cold winters, resulting in summer drought . In the winter, there is a glacial advance
- Geography:
  - This area is dominated by islands and sinking streams and is rich with coal
- Economics:
  - Currency: basic needs are free but everyone must spend half the year working on maintanence and construction of public goods
  - Goods are purchased from individual shops scattered throughout each settlement
- Resource:
  - music which is/are used in daily life 

Sooth:47
- Environment:
  - Humidity:
    - Rainfall during all months, this causes severe thundertorms
  - Temperature:
    - Cold Winters, resulting in a summer ice melting, creating new waterways and resulting in the presence of pest plague
- Geography:
  - This area is dominated by the winding coastline and glaciers and is rich with slate
- Economics:
  - Currency: they use the currency of another land
  - Goods are purchased from centralized massive bazaars in each settlement
- Resource:
  - useful or significant plant pollen which is/are used in infrastructure
  - useful or significant plant sap which is/are used in sacred ceremony

### Tables

Here is an example table for a tattoo that a witch may have:

```js
let tattoEntries = [
    ['the moon', 5],
    ['a [creepyCreature]', 3],
    ['a wreath of skulls', 5],
    ['a rusted dagger', 3],
    ['a three-headed [creepyCreature]', 5],
    ['three [creepyCreature]s staring at the moon', 3],
    ['a functional mirror', 21],
]
```

Note that a functionaal mirror is a much stranger tattoo for anyone to have than a tattoo of the moon, so it's sooth score is accordingly higher.

*sooth scores are often fibonacci numbers to help distinguish how crazy they are*


## to-do
- the dynamic building of datasets during generation (like if the town is near a river, remember that and don't use ocean stuff, use river stuff more)
- pre-filtering of sooth, so you can specify how crazy you want the entries to be
this is easily accomplished by doing mutiple passes and filtering, but that might have bad performance, so a pre-filter might be better? but there also could be infinite loops which I don't really prevent...
   - Potentially use some kind of heuristic that conservatively estimates the amount of sooth you could get from any completion of a string.
   - A simple one (in the non-attribute, pure sooth table case) would be to just take the max sooth generated by your table, and then recursively propagate that up your tree to get an upper bound on how much sooth you could generate. Then if you're trying to create a witch with only a budget of 5 sooth, and all possible witches use at least 10, you know to stop your search
-  [dev](https://www.notion.so/pelorus/Devlopment-cfb6b49d58424c5dad997d4f8e5a61f1)
