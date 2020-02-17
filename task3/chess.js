// СИМВОЛ	HTML КОД СИМВОЛА	ОПИСАНИЕ
// ♔	&#9812;	Белый король
// ♕	&#9813;	Белый ферзь
// ♖	&#9814;	Бёлая ладья (тура)
// ♗	&#9815;	Белый офицер (слон)
// ♘	&#9816;	Белый конь
// ♙	&#9817;	Белая пешка
// ♚	&#9818;	Чёрный король
// ♛	&#9819;	Чёрный ферзь
// ♜	&#9820;	Чёрная ладья (тура)
// ♝	&#9821;	Чёрный офицер (слон)
// ♞	&#9822;	Чёрный конь
// ♟	&#9723;	Чёная пешка





'use strict'
let figure = "";

function getChessFigure(row, col) {
    if (row == 1) {
        switch (col) {
            case 0:
                figure = "&#9814";
                break;
            case 1:
                figure = "&#9816";
                break;
            case 2:
                figure = "&#9815";
                break;
            case 3:
                figure = "&#9813";
                break;
            case 4:
                figure = "&#9812";
                break;
            case 5:
                figure = "&#9815";
                break;
            case 6:
                figure = "&#9816";
                break;
            case 7:
                figure = "&#9814";
                break;
        }
        return figure;
    } 
    if (row == 2){
      figure = "&#9817"
      return figure;
    }
    if (row == 8) {
      switch(col){
         case 0:
                figure = "&#9820";
                break;
            case 1:
                figure = "&#9822";
                break;
            case 2:
                figure = "&#9821";
                break;
            case 3:
                figure = "&#9819";
                break;
            case 4:
                figure = "&#9818";
                break;
            case 5:
                figure = "&#9821";
                break;
            case 6:
                figure = "&#9822";
                break;
            case 7:
                figure = "&#9820";
                break;
                
      }
      return figure;
    }
    if (row == 7){
      figure = "&#9823"
      return figure;
    }
    return figure = "";
}

const fieldLength = {
    rowsCount: 8,
    colsCount: 8
}
let arrLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let field = "";

let renderer = {
    render() {
        for (let row = 0; row < fieldLength.rowsCount + 1; row++) {
            field += "<tr>"
            for (let col = 0; col < fieldLength.colsCount + 1; col++) {
                if (row == 0) {
                   if (col == 8) continue
                  field += `<td data-x = "${row}" data-y = "${col}" class = "numbers">${col+1}</td>`
                  continue
               }
               if (col == 8){
                  field += `<td data-x = "${row}" data-y = "${col}" class = "numbers">${arrLetters[row - 1]}</td>`
                  continue
               }
                    if (row % 2 == 0) {
                     
                        if (col % 2 == 0) {
                            field += `<td data-x = "${row}" data-y = "${col}" style = "background-color: darkgray;">${getChessFigure(row, col)}</td>`
                        } else {
                            field += `<td data-x = "${row}" data-y = "${col}" style = "background-color: white;">${getChessFigure(row, col)}</td>`
                        }

                    } else {
                        if (col % 2 !== 0) {
                            field += `<td data-x = "${row}" data-y = "${col}" style = "background-color: darkgray;">${getChessFigure(row, col)}</td>`
                        } else {
                            field += `<td data-x = "${row}" data-y = "${col}" style = "background-color: white;">${getChessFigure(row, col)}</td>`
                        }
                    }
                
            }
            field += "</tr>"
        }
        return `<table><tbody>${field}</tbody></table>`
    }

}

document
    .body
    .insertAdjacentHTML('afterbegin', renderer.render())