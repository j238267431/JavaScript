class Snake {
  constructor () {
    this.possibleDirections = ['up', 'down', 'left', 'right']
    this.body = [
      {
        x: 1,
        y: 1
      },
      {
         x: 1,
         y: 2
       },
       {
         x: 1,
         y: 3
       },
       {
         x: 1,
         y: 4
       },
    ]
    this.direction = 'down'
  }
  
}
