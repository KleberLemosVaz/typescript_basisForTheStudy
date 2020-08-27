/* eslint-disable */

//Tipos básicos
let personName: string = 'Kleber';
let age: number = 31;
let isAdult: boolean = true;
let symbol: symbol = Symbol('qualquer');

//Arrays
let numbersArray: Array<number> = [1, 2, 3];
let numbersArray2: number[] = [1, 2, 3];
let stringsArray: Array<string> = ['a', 'b']
let stringsString: string[] = ['a', 'b']

//Object

let person: {
    personName: string,
    age: number,
    isAdult?: boolean
} = {
    age: 30,
    personName: 'Kleber Vaz'

}


//function
function sum(x: number ,y: number) {
    return x + y
}
