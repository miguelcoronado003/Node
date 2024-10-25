"use strict";
// funcion para traer un nombre especificado en un string
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return "Hello, ".concat(name);
}
var username = "Jhon";
console.log(greet(username));
//Filtro de numeros pares 
function filterPairs(numbers) {
    return numbers.filter(function (num) { return num % 2 == 0; });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var pairs = filterPairs(numbers);
console.log(pairs);
//Suma de las diagonales de una matriz
function SumDiagonals(matrix) {
    var sumPrincipal = 0;
    var sumSecondary = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
    }
    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary };
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var _a = SumDiagonals(matrix), diagonalPrincipal = _a.diagonalPrincipal, diagonalSecondary = _a.diagonalSecondary;
console.log("Sum Diagonal Principal: ".concat(diagonalPrincipal));
//Clase para representar un libro
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.showInfo = function () {
        console.log("Title: ".concat(this.title, ",Author: ").concat(this.author, ", Year: ").concat(this.year));
    };
    Book.prototype.isMoreRecentThan = function (anotherBook) {
        return this.year > anotherBook.year;
    };
    return Book;
}());
var book1 = new Book("One Hundred Years of solitude", "Gabriel García Márquez", 1967);
var book2 = new Book("Don Quixote", "Miguel de Cervantes", 1605);
book1.showInfo();
console.log(book1.isMoreRecentThan(book2));
//Leer y escribir un archivo JSON
var fs = require("fs");
//Leer JSON 
function readJsonFile(path) {
    var data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}
//Escribir JSON
function writeJsonFile(path, products) {
    var data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}
var filePath = './products.json';
//Leer datos
var products = readJsonFile(filePath);
//Modificar un producto
products[0].price = 99.99;
//Escribir cambios 
writeJsonFile(filePath, products);
console.log('file updated successfully.');
function sortByAge(people) {
    return people.sort(function (a, b) { return a.age - b.age; });
}
var people = [
    { name: "Miguel", age: 20 },
    { name: "jose", age: 25 },
    { name: "daniela", age: 30 }
];
var peopleOrdered = sortByAge(people);
console.log(peopleOrdered);
