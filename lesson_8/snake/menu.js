'use strict'

class Menu {
   constructor(){
       this.startButton = document.getElementById('startBtn')
       this.pauseButton = document.getElementById('pauseBtn')
   }
   addButtonClickListener(startBtnClickEventHandler, pauseBtnClickEventHandler){
   this.startButton.addEventListener('click', startBtnClickEventHandler)
   this.pauseButton.addEventListener('click', pauseBtnClickEventHandler)
   }


}