"use strict";
//Leer y escribir un archivo JSON
Object.defineProperty(exports, "__esModule", { value: true });
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
