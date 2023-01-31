// Seper class:
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        // reference to 'Super class':
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOOOWWW!'
    }
}
const dori = new Cat('Dori', 8);

class Dog extends Pet {
    bark() {
        return 'WOOFF!!'
    }
    eat() {
        // will use 'eat' here, but if it dont see 'eat' function on Dog, it looks for it in the extend of Pet
        return `${this.name} is crazy about his food :D`
    }
}
const bobby = new Dog('Bobby', 4);

