'use strict'

class Game {
  constructor () {
    this.tickIdentifier = null
    this.message = document.getElementById('message')
  }
  init (settings, status, board, snake, menu, food) {
    this.settings = settings
    this.status = status
    this.board = board
    this.snake = snake
    this.menu = menu
    this.food = food
  }
  run () {
    this.menu.addButtonClickListener(
      this.start.bind(this),
      this.pause.bind(this)
    )
    document.addEventListener('keydown', this.newDirection.bind(this))
  }

  start () {
    if (this.status.condition == 'paused') {
      this.status.isPlaying()
      this.tickIdentifier = setInterval(
        this.doTick.bind(this),
        1000 / this.settings.speed
      )
    }
  }

  pause () {
    clearInterval(this.tickIdentifier)
  }

  doTick () {
    this.addHead()
    this.removeSnakeTail()
    this.board.renderSnake()
    this.eatFood()
    
  }

  addHead () {
    let goDownAndUpXCoord = this.snake.body[this.snake.body.length - 1].x
    let goUpAndDownYCoord = this.snake.body[this.snake.body.length - 1].y
    let goLeftAndRightXCoord = this.snake.body[this.snake.body.length - 1].x
    let goLeftAndRightYCoord = this.snake.body[this.snake.body.length - 1].y

    switch (this.snake.direction) {
      case 'down':
        this.snake.body.push({
          x: goDownAndUpXCoord,
          y: goUpAndDownYCoord + 1
        })
        break
      case 'up':
        this.snake.body.push({
          x: goDownAndUpXCoord,
          y: goUpAndDownYCoord - 1
        })
        break
      case 'left':
        this.snake.body.push({
          x: goLeftAndRightXCoord - 1,
          y: goLeftAndRightYCoord
        })
        break
      case 'right':
        this.snake.body.push({
          x: goLeftAndRightXCoord + 1,
          y: goLeftAndRightYCoord
        })
        break
    }
  }

  /**
   * удаляет хвост змеи
   */
  removeSnakeTail () {
    let cell = document.querySelector(
      `tr:nth-child(${this.snake.body[0].y}) td:nth-child(${this.snake.body[0].x})`
    )
    cell.classList.remove('snakeBody')
    this.snake.body.splice(0,1)
  }
  /**
   *
   * @param {keyboard event} event
   */
  newDirection (event) {
    if (this.checkDirection(event.key) === true) {
      switch (event.key) {
        case 'ArrowDown':
          this.changeDirection('down')
          break
        case 'ArrowUp':
          this.changeDirection('up')
          break
        case 'ArrowLeft':
          this.changeDirection('left')
          break
        case 'ArrowRight':
          this.changeDirection('right')
          break
      }
    }
  }
  changeDirection (newDirection) {
    this.snake.direction = newDirection
  }
  /**
   *
   * @param {event.key} pushedButton
   *  возвоащает true если была нажата клавиша в противоположном текущему направлению
   */
  checkDirection (pushedButton) {
    return (
      (pushedButton === 'ArrowDown' && this.snake.direction !== 'up') ||
      (pushedButton === 'ArrowUp' && this.snake.direction !== 'down') ||
      (pushedButton === 'ArrowLeft' && this.snake.direction !== 'right') ||
      (pushedButton === 'ArrowRight' && this.snake.direction !== 'left')
    )
  }
  eatFood () {
    let snakeHead = this.snake.body[this.snake.body.length - 1]
    if (snakeHead.x === this.food.x && snakeHead.y === this.food.y){
       this.snakeGrow(snakeHead)
       this.food.removeFood()     
       this.food.placeFood(this.board, this.settings, this.snake)
    }
  }
  snakeGrow(){
     let tail = this.snake.body
   tail.unshift({x: tail[0].x, y: tail[0].y})
  }

  isWin(){
     if (this.bodyLenght()){
        let message = document.getElementById('message')
        message.innerHTML = 'You are win'
        this.status.condition = `paused`
        if(!this.status.isPlaying()){
           this.pause()
        }
     }
     
  }
  bodyLenght(){
   return this.snake.body.length === this.settings.winLength
  }
}
