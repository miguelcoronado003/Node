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