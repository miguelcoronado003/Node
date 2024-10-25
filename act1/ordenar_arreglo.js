//Ordenar un Arreglo de objetos
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
