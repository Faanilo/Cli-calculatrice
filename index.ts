import { question } from "readline-sync";
type Operation = '+' | '-' | '*' | '/'
function main(): void {
    const a: string = question('Entrer  un nombre : \n')
    const operation: string = question('Quelle operation voulez-vous  effectuer  ? : ')
    const b: string = question('Entrer un autre  nombre : \n')
    const validInput: boolean = isNumber(a) && isOperator(operation) && isNumber(b)
    console.log(validInput)
    if (validInput) {
        const x: number = parseInt(a)
        const y: number = parseInt(b)
        const result = calculate(x, operation as Operation, y)
    }
    else {
        console.log('Invalid Input')
    }
}
function calculate(x: number, operation: Operation, y: number) {
    switch (operation) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y
    }
}

function isOperator(operation: string): boolean {
    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default:
            return false
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum)
    return isNum
}

main()