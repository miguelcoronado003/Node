// funcion para traer un nombre especificado en un string

function greet(name: string){
    return `Hello, ${name}`;
}

let username = "Jhon";
console.log(greet(username));

//Filtro de numeros pares 

function filterPairs(numbers: number[]): number[]{
    return numbers.filter(num => num % 2 == 0);
} const numbers = [1, 2, 3, 4, 5 , 6, 7, 8];
const pairs = filterPairs(numbers);
console.log(pairs);

//Suma de las diagonales de una matriz

function SumDiagonals(matrix: number[][]): { diagonalPrincipal: number, diagonalSecondary: number}{
    let sumPrincipal = 0;
    let sumSecondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
        }

    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary};
}

const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

const{ diagonalPrincipal, diagonalSecondary } = SumDiagonals(matrix);
console.log(`Sum Diagonal Principal: ${diagonalPrincipal}`);

//Clase para representar un libro

class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showInfo(): void{
        console.log(`Title: ${this.title},Author: ${this.author}, Year: ${this.year}`);
    }

    isMoreRecentThan(anotherBook: Book): boolean {return this.year > anotherBook.year;
    }
}

const book1 = new Book("One Hundred Years of solitude", "Gabriel García Márquez", 1967);
const book2 = new Book("Don Quixote", "Miguel de Cervantes", 1605);

book1. showInfo();
console.log(book1.isMoreRecentThan(book2));

//Leer y escribir un archivo JSON

import * as fs from 'fs';

interface Product{
    id: number;
    name:string;
    price:number;
}

//Leer JSON 

function readJsonFile(path: string): Product[]{
    const data = fs. readFileSync(path, 'utf8');
    return JSON.parse(data);
}

//Escribir JSON
function writeJsonFile(path: string,products: Product[]): void {
    const data = JSON. stringify(products, null, 2);
    fs. writeFileSync(path, data, 'utf-8');
}

const filePath = './products.json';

//Leer datos
let products = readJsonFile(filePath);

//Modificar un producto

products[0].price = 99.99;

//Escribir cambios 
writeJsonFile(filePath, products);

console.log('file updated successfully.')

//Ordenar un Arreglo de objetos

interface Person{
    name: string;
    age: number;
}

function sortByAge(people: Person[]): Person[]{
    return people.sort((a,b) => a.age - b.age);
}

const people: Person[] = [
    { name: "Miguel", age:20},
    { name: "jose", age:25},
    { name: "daniela", age:30}
];

const peopleOrdered = sortByAge(people);
console.log(peopleOrdered);