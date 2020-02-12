'use strict';

function GetObject() {
    this.hundreds = hundreds;
    this.tens = tens;
    this.units = units;

}

let hundreds = null;
let units = null;
let tens = null;

function checkNumber() {
    let entNumber = Number(prompt('введите целое число от 0 - 999'));
    if (isNaN(entNumber) || !Number.isInteger(entNumber) || entNumber < 0 || entNumber > 999) {
        console.log(
            'было введено не число, либо не целое число, либо число за пределами диапазона ' +
            '0-999'
        );
        return {};
    }
    entNumber = String(entNumber)
    if (entNumber.length == 3) {
        units = Number(entNumber.charAt(2));
        tens = Number(entNumber.charAt(1));
        hundreds = Number(entNumber.charAt(0));
    } else if (entNumber.length == 2) {
        units = Number(entNumber.charAt(1));
        tens = Number(entNumber.charAt(0));
        hundreds = 0;
    } else {
        units = Number(entNumber.charAt(0));
        tens = 0;
        hundreds = 0;
    }

}
checkNumber()
const numberObject = new GetObject()
console.log(numberObject)

// 1 Написать функцию, преобразующую число в объект. Передавая на вход число в
// диапазоне [0, 999], мы должны получить на выходе объект, в котором в
// соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds) Например, для числа 45 мы должны получить
// следующий объект: { units: 5, это единицы tens: 4, это десятки hundreds: 0,
// это сотни } Если число было передано вне [0, 999] диапазона, не целое число
// или вообще не число, необходимо выдать соответствующее сообщение с помощью
// console.log и вернуть пустой объект. Вам может пригодиться: 
// Number.isInteger(value) – функция проверяет, является ли переданное число
// целым, подробнее здесь https://mzl.la/2XCVSsx  Math.floor(value) - метод
// возвращает целое число, которое меньше или равно данному числу (проще говоря
// округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .