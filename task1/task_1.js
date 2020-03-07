'use strict';
let div = document.querySelector('div');
let button_open = document.querySelector('.button_open');
let button_close = document.querySelector('.button_close');

button_open.addEventListener('click', function(){
    div.classList.add('window_show', 'scale-in-ver-center');
    div.classList.remove('scale-out-vertical');

});

button_close.addEventListener('click', function(){
    div.classList.add('scale-out-vertical');
    setTimeout(function(){
        div.classList.remove('window_show');
    }, 490)
});
