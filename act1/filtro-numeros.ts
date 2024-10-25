//Filtro de numeros pares 

function filterPairs(numbers: number[]): number[]{
    return numbers.filter(num => num % 2 == 0);
} const numbers = [1, 2, 3, 4, 5 , 6, 7, 8];
const pairs = filterPairs(numbers);
console.log(pairs);