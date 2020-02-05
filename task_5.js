'use strict';

let arg1 = Number(prompt('введите первое число'));
let arg2 = Number(prompt('введите второе число 2'));


function mathOperation(arg1, arg2, operation){
   switch (operation){
      case 'Sum':
      return getSum(arg1,arg2);
      break;
      case 'Mult':
      return getMultiplying(arg1,arg2);
      break;
      case 'Div':
      return getDividing(arg1,arg2);
      break;
      case 'Subs':
      return getSubstraction(arg1,arg2);
      break;
   }
   
}

console.log(`${mathOperation(arg1, arg2, 'Sum')} сумма чисел ${arg1} и ${arg2}`)
console.log(`${mathOperation(arg1, arg2, 'Mult')} произведение чисел ${arg1} и ${arg2}`)
console.log(`${mathOperation(arg1, arg2, 'Div')} деление чисел ${arg1} и ${arg2}`)
console.log(`${mathOperation(arg1, arg2, 'Subs')} вычитание чисел ${arg1} и ${arg2}`)
