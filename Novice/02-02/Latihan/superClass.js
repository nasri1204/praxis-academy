class Cat {
    constructor(nama) {
        this.nama = nama;
    }

    speak() {
        console.log(`${this.nama} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.nama} Meong.`);
    }
}

let l = new Lion('Comot');
l.speak();