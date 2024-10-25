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