// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     speak() {
//         console.log(`${this.name} makes a noice.`)
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name)
//     }

//     speak() {
//         console.log(`${this.name} barks`)
//     }
// }

// let c = new Cat('Miki')
// c.speak()


const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.