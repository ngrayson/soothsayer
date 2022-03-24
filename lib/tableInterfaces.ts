interface tableEntry {
  name: string,
  sooth: number,
  origin?: Object
}

interface table {
  name: string,
  entries: Array<tableEntry>
}
