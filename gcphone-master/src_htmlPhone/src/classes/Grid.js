class Grid extends Array {
  constructor (sizeY, sizeX, valueFn) {
    super()
    for (var i = 0; i < sizeY; i++) {
      this[i] = []
      for (var j = 0; j < sizeX; j++) {
        this[i][j] = valueFn(i, j)
      }
    }
  }
  static random (grid) {
    var x = Math.floor(Math.random() * grid.length)
    var y = Math.floor(Math.random() * grid[x].length)
    return grid[x][y]
  }
}
export default Grid
