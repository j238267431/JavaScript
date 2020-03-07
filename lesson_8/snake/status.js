'use strict'

class Status {
   constructor(){
      this.setPaused()
   }
   /** устанавливаеи статус играем */
   setPlaying() {
      this.condition = 'playing';
   }
   /** устанавливаени паузу */
   setPaused() {
      this.condition = 'paused';
   }
   /** возвращает true если статус игры playing */
   isPlaying() {
      return this.condition === 'playing';
   }
   /** возвращает true если игра на паузе */
   isPaused(){
      return this.condition === 'paused';
   }
}