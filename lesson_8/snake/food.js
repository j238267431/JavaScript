'use strict'

class Food {
   constructor(){
     this.x = null
     this.y = null
   }
   /**
    * 
    * @param {object} snake - snake body and available directions 
    * @param {*} board - game board
    * @param {*} settings - game settings
    */
   placeFood(board, settings, snake){
     this.getRandomCoord(board, settings, snake)
     this.renderFood(this.cell)

   }
/**
 * 
 * @param {*} board 
 * @param {*} settings 
 * @param {*} snake 
 * return checked !== snake.body food coordinates
 */
   getRandomCoord(board, settings, snake){
      while (true){
      let randomY = Math.floor(Math.random() * settings.rowsCount) + 1
      let randomX = Math.floor(Math.random() * settings.colsCount) + 1
      if (this.isSnakeBody(randomY, randomX, snake)){
         // return this.cell = {randomY, randomX}
         return this.x = randomX,
         this.y = randomY
         }
      }
      
   }

/**
 * 
 * @param {Number} y - coordinate of the food by Y 
 * @param {Number} x - coordinate of the food by X
 * @param {Object} snake - snake body
 * check whether food is not appears on a snake body
 */
   isSnakeBody(y,x, snake){
      for (let i = 0; i < snake.body.length; i++){
        return (y !== snake.body[i].y && x !== snake.body[i].x)

   }
}
   /**
    * 
    * @param {Object} food - object of food coordinates
    * insert food at a board
    */
   renderFood(food){
      let td = document.querySelector(`tr:nth-child(${this.y}) td:nth-child(${this.x})`)
      td.classList.add('food')
   }
   removeFood(food){
      let td = document.querySelector(`tr:nth-child(${this.y}) td:nth-child(${this.x})`)
      td.classList.remove('food')
   }
}