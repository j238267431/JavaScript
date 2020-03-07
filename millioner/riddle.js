function Riddle(question, answer_a, answer_b, answer_c, answer_d, arrRightAnswer){
   this.question = question;
   this.answer_a = answer_a;
   this.answer_b = answer_b;
   this.answer_c = answer_c;
   this.answer_d = answer_d;
   this.rightAnswer = arrRightAnswer;
}

let riddle = {
    getRiddle() {
        while (randArr.length < riddlesQty.quantity) {
            rand = parseInt(Math.random() * 6);
            if (!randArr.includes(rand)) {
                randArr.push(rand);
                return newRiddle = new Riddle (arrRidles[rand][0],arrRidles[rand][1],arrRidles[rand][2],arrRidles[rand][3],arrRidles[rand][4],arrRidles[rand][5])
            }
        }

    }
}

arrRidles = [
["сколько будет 2x2?",2,4,3,1,["b", 4, "четыре", "chetire", "4"]],
["зимой и летом одним цветом?","ель","заяц","белка","волк",["a", "ель", "елка", "ёлка", "elka"]],
["висит груша нельзя скушать?","тыква","груша","лампа","тетя груша",["c", "груша", "grusha"]],
["два кольца два конца посередине гвоздик?","кружка","ножницы","дом","кузнец",["b", "ножницы", "nozhnitci"]],
["зимой белый летом серый?","Гендальф","Арагорн","Фродо","Заяц",["d", "заяц", "zayac", "rabbit"]],
["сколько будет 3x2?",6,4,3,1,["a", 6, "шесть", "shest", "6"]]]
