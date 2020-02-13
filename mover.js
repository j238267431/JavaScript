let mover = {
    getDirection() {
        const availableDirections = [
            1,
            2,
            3,
            4,
            6,
            7,
            8,
            9
        ];
        while (true) {
            let direction = parseInt(prompt("введите число 1, 2, 3, 4, 6, 7, 8 или 9"));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("для перемещения введите одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9");
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };

        switch (direction) {
            case 2:
                nextPosition.y++

                break;
            case 4:
                nextPosition.x--

                break;
            case 6:
                nextPosition.x++

                break;
            case 8:
                nextPosition.y--

                break;
            case 1:
                nextPosition.y++
                nextPosition.x--

                break;
            case 3:
                nextPosition.y++
                nextPosition.x++

                break;
            case 7:
                nextPosition.y--
                nextPosition.x--

                break;
            case 9:
                nextPosition.y--
                nextPosition.x++

                break;

        }
        if (nextPosition.x < 0 || nextPosition.x >= 10 || nextPosition.y < 0 || nextPosition.y >= 10) {
            alert("Вы пытаетесь пройти сквозь стену")
            nextPosition.x = player.x;
            nextPosition.y = player.y;
        }
        return nextPosition;
    }
}