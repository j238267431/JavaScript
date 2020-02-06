'use strict';
/**
 * Функция складывает 2 числа
 * @param {Number} a первое слагаемое
 * @param {Number} b второе слагаемое
 */
function getSum(a,b){
   return a+b;
}
/**
 * Функция умножает 2 числа
 * @param {Number} a первый множитель
 * @param {Number} b второй множитель
 */
function getMultiplying(a,b){
   return a*b;
}
/**
 * Функция делит одно число на другое
 * @param {Number} a делимое
 * @param {Number} b делитель
 */
function getDividing(a,b){
   return a/b;
}
/**
 * Функция вычитания
 * @param {Number} a от этого числа отнимаем 
 * @param {Number} b это число отнимаем
 */
function getSubstraction(a,b){
   return a-b;
}

console.log(getSum(2,3));
console.log(getMultiplying(3,4));
console.log(getDividing(5,3));
console.log(getSubstraction(10,7));
// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

