'use strict'

let buttons = document.querySelectorAll('button');
buttons.forEach(element => element.addEventListener('click', function(event){
   //div.classList.add('desc_show')
   //console.log(event.target)
let div = event.target.parentNode;

const productBlock = {
   name: div,
   text: div.querySelector('.desc'),
   product: div.querySelector('.product__name'),
   img: div.querySelector('img'),
   button: div.querySelector('button')
};

if (productBlock.button.innerText == "подробнее"){
productBlock.img.classList.add('img_hide');
productBlock.text.classList.add('desc_show');
productBlock.button.innerText = "отмена";
}else{
productBlock.img.classList.remove('img_hide');
productBlock.text.classList.remove('desc_show');
productBlock.button.innerText = "подробнее";
}
}));


