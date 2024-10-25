//Filtro de numeros pares 
function filterPairs(numbers) {
    return numbers.filter(function (num) { return num % 2 == 0; });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var pairs = filterPairs(numbers);
console.log(pairs);
