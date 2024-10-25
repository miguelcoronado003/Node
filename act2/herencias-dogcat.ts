class Animal {
    constructor(public name: string) {}

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

console.log()
console.log()
dog.speak();
cat.speak();