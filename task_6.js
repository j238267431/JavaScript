'use strict';

let money = Number(prompt('введите сумму которую хотите положить на счет'))
let lenght = String(money).length
let lastNum = Number(String(money).charAt(lenght-1))
let endString = 'рубля'

switch (lastNum){
   case 1:
      endString = "рубль";
      switch (money){
         case 11:
            endString = "рублей";
            break;
      }
      break;
   case 2:
   case 3:
   case 4:
      switch (money){
         case 12:
         case 13:
         case 14:
            endString = "рублей";
            break;
      }
      break;
   case 0:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
      endString = "рублей";
      break;
}

console.log(`Ваша сумма в ${money} ${endString} успешно зачислена.`)