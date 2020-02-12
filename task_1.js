'use strict';

function GetObject() {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}

function getNUmber() {
    return Number(prompt('введите целое число от 0 - 999'));
}

function checkNumber() {
    let entNumber = getNUmber();
    if (isNaN(entNumber) || !Number.isInteger(entNumber)) {
        alert('было введено не число, либо не целое число');
        return checkNumber();
    }

}

console.log(checkNumber());

function getPartsOfNumber() {
   let checkedNumber = String(checkNumber());
   
}

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