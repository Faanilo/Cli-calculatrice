"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var a = (0, readline_sync_1.question)('Entrer  un nombre : \n');
    var operation = (0, readline_sync_1.question)('Quelle operation voulez-vous  effectuer  ? : ');
    var b = (0, readline_sync_1.question)('Entrer un autre  nombre : \n');
    var validInput = isNumber(a) && isOperator(operation) && isNumber(b);
    console.log(validInput);
}
function isOperator(operation) {
    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
