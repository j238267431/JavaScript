let rightAnswer = 0;
let userAnswer = null;
let randArr = [];
let rand = null;
let game = {

    run() {

        for (i = 0; i < riddlesQty.quantity; i++) {
            console.log(`Внимание, вопрос № ${i + 1}`);
            riddle.getRiddle();
            console.log(newRiddle.question)
            userAnswer = prompt(
                `введитете один из вариантов ответа\n a: ${newRiddle.answer_a}\n b: ${newRiddle.answer_b}\n c: ${newRiddle.answer_c}\n d: ${newRiddle.answer_d}`
            )
            if (userAnswer == null) {
                break;
            }

            if (newRiddle.rightAnswer.includes(userAnswer.toLowerCase())) {
                player.rightAnswersCount(rightAnswer);
                rightAnswer = player.rightAnswers;
            }
        }
        console.log(`Игра окончена, правильных ответов: ${player.rightAnswers}`)
        console.log("чтобы начать игру сначала, наберите game.run() и нажмите Enter");
    },
    init() {
        console.log("добро пожаловать на игру кто хочет стать миллионером");
        console.log("в игре нужно будет правильно ответить на 5 вопросов");
        console.log("чтобы начать игру наберите game.run() и нажмите Enter");
    }
}
game.init();