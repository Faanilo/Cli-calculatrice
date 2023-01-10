import { question } from "readline-sync";
function main(): void {
    const a: string = question('Entrer  un nombre : \n')
    const operation: string = question('Quelle operation voulez-vous  effectuer  ? : ')
    const b: string = question('Entrer un autre  nombre : \n')
    const validInput: boolean = isNumber(a) && isOperator(operation) && isNumber(b)
    console.log(validInput)
}   

function isOperator (operation:string):boolean{
    switch(operation){
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
    const isNum: boolean =!isNaN(maybeNum)
    return isNum
}

main()