class Snake {
  constructor () {
    this.possibleDirections = ['up', 'down', 'left', 'right']
    this.body = [
      {
        x: 10,
        y: 1
      }
    ]
    this.direction = 'down'
    this.snakeCollapse = false
  }
  
}
