'use strict'

let mainDiv = document.querySelector('.slider');

let leftArrow = document.createElement('i');
leftArrow.classList = 'fas fa-arrow-circle-left';
mainDiv.insertAdjacentElement('beforeend', leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList = 'fas fa-arrow-circle-right';
mainDiv.insertAdjacentElement('beforeend', rightArrow);

let spinner = document.createElement('i');
spinner.classList = 'fas fa-spinner';
mainDiv.insertAdjacentElement('beforeend', spinner);

window.addEventListener('load', function(){
   spinner.classList.add('hidden-slide')
 });

let images = {
  currentImg: 2,
  slides: [],

  init () {
    this.getAllImages();
    this.addFirstImg(this.slides);
    this.slider(this.slides, leftArrow, rightArrow);
  },
  getAllImages () {
    let img = document.querySelectorAll('img');
    this.slides = img;
  },

  addFirstImg () {
    this.slides[this.currentImg].parentNode.classList.remove('hidden-slide');

  },
  slider (img) {

    leftArrow.addEventListener('click', function () {
      images.getLeftArrow();
      images.setRightAnimation()

    })
    rightArrow.addEventListener('click', function () {
      images.getRightArrow();
      images.setLeftAnimation()
    })
  },
  getLeftArrow () {
   images.hideImg();
    if (this.currentImg == 0) {
      this.currentImg = this.slides.length - 1;
    } else {
      this.currentImg--;
    }
    this.addFirstImg();
  },
  getRightArrow () {
   images.hideImg();
   if (this.currentImg == this.slides.length - 1) {
     this.currentImg = 0;
   } else {
     this.currentImg++;
   }
   this.addFirstImg();
 },
 hideImg(){
    let div = document.querySelectorAll('img');
    div.forEach(element => {element.parentNode.classList.add('hidden-slide');
    });
 },
 setRightAnimation(){
   this.slides[this.currentImg].parentNode.classList.remove('slide-in-left');
   this.slides[this.currentImg].parentNode.classList.add('slide-in-right');
   
 },
 setLeftAnimation(){
   this.slides[this.currentImg].parentNode.classList.remove('slide-in-right');
   this.slides[this.currentImg].parentNode.classList.add('slide-in-left');
 },
}

images.init();


