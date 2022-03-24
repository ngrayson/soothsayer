import math, { Matrix, range } from 'mathjs'
import { elementTypes, WORLD_ELEMENT } from './soothsayerInterfaces'
export class relationshipMatrix {
  name?: string // the name of the relationship matrix
  matrix: Matrix // relationship matrix
  colElement: string // what is on the x axis
  rowElement: string // what is on the y axis
  colLabels: Array<number> // ids of x axis elements for reference
  rowLabels: Array<number> // ids of y axis elements for reference
    
  constructor(colElement: string, rowElement: string, name) {
    if (WORLD_ELEMENT[colElement] == undefined) throw `${colElement} is not a valid world element` // these checks must be done manually in order to drastically reduce complexity elsewhere in this class
    if (WORLD_ELEMENT[rowElement] == undefined) throw `${rowElement} is not a valid world element` // these checks must be done manually in order to drastically reduce complexity elsewhere in this class

    this.name = name ? name : undefined 
    this.matrix = math.matrix()
    this.colElement = colElement
    this.rowElement = rowElement
    this.colLabels = []
    this.rowLabels = []
  }

  addElement = (element: elementTypes) => {
    if (typeof element == this.colElement) {
      this.colLabels.push(element.id)
      this.matrix.resize([this.colLabels.length,this.rowLabels.length])
    }
    else if (typeof element == this.rowElement) { 
      this.rowLabels.push(element.id)
      this.matrix.resize([this.colLabels.length,this.rowLabels.length])}
    else throw `${element.name} is of type ${typeof element}, but ${this.name?this.name:'this relationship matrix'} is between elements of type ${this.colElement} and ${this.rowElement}`
  }

  // you'll need to get the labels from this instance of the relationship matrix to make sense of the numbers
  getRelationships = (element: elementTypes) => {
    if (typeof element == this.colElement) {
      const colIndex = this.colLabels.find(id => {
        return id == element.id
      })
      return math.squeeze(this.matrix.subset(math.index(math.range(0,this.rowLabels.length),colIndex))).toArray()
    }
    else if (typeof element == this.rowElement) {
      const rowIndex = this.rowLabels.find(id => {
        return id == element.id
      })
      return math.squeeze(this.matrix.subset(math.index(rowIndex, math.range(0, this.colLabels.length),)))
    }
    else throw `${element.name} is of type ${typeof element}, but ${this.name?this.name:'this relationship matrix'} is between elements of type ${this.colElement} and ${this.rowElement}`
  }

  setRelationship = (elementA: elementTypes, elementB: elementTypes, strength: number) => {
    if (typeof elementA == this.colElement && typeof elementB == this.rowElement) {
    }
    if (typeof elementA == this.rowElement && typeof elementB == this.colElement) {

    else throw `${element.name} is of type ${typeof element}, but ${this.name?this.name:'this relationship matrix'} is between elements of type ${this.colElement} and ${this.rowElement}`

    }
    
  

  toTable = () => {
    // requires printing of rows as columns and columns as rows 
  }
}
