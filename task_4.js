'use strict';


products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"]
    }, {
        id: 5,
        price: 499,
        photos: []
    }, {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    }, {
        id: 8,
        price: 78
    }
];


console.log(products.filter(elem => elem.photos && elem.photos.length > 0));
console.log(products.sort((elem1,elem2) => elem1.price-elem2.price))



// 5 Перед вами находится массив с продуктами в интернет - магазине.Вам нужно : 1 Получить все товары,
// у которых есть фотографии,
// можете использовать метод filter https : //mzl.la/2qROQkT
// 2 Отсортируйте товары по цене(от низкой цены к высокой),
// можете использовать метод sort
// https : //mzl.la/2Y79hbZ