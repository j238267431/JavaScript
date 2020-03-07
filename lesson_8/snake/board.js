'use strict'

class Board {
  constructor () {
    this.boardEl = document.getElementById('game')
  }

  init (settings, snake, game) {
    this.settings = settings
    this.snake = snake
    this.game = game
  }
  /**
   * отрисовывает поле игры
   */
  renderBoard () {
    this.boardEl.innerHTML = ''
    for (let i = 0; i < this.settings.rowsCount; i++) {
      let tr = document.createElement('tr')
      for (let i = 0; i < this.settings.colsCount; i++) {
        let td = document.createElement('td')
        tr.appendChild(td)
      }
      this.boardEl.appendChild(tr)
    }
  }
  /**
   * из тела змейки берет координаты и отрисовывает их на поле добавляя класс snakebody
   */
  renderSnake () {
    let snakeBody = this.snake.body
    snakeBody.forEach(element => {
      let cell = document.querySelector(
        `tr:nth-child(${element.y}) td:nth-child(${element.x})`
      )

      if (!this.snake.snakeCollapse) {
        cell.classList.add('snakeBody')
      } else {
         let message = document.getElementById('message');
         message.innerHTML = 'you are lost';
      }
    })
    this.game.isWin()
  }
}
