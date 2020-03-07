'use strict'

window.addEventListener('load', () => {

   const settings = new Settings();
   const status = new Status();
   const snake = new Snake();
   const board = new Board();
   const menu = new Menu ();
   const food = new Food ();
   const game = new Game ();
   

   settings.init({speed: 5, winLength: 5});
   board.init(settings, snake, game);

   game.init(settings, status, board, snake, menu, food)
   board.renderBoard();
   board.renderSnake();
   food.placeFood(board, settings, snake);
   
   game.run()
   
});