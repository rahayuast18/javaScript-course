class Animal {
     constructor(name2, age2, isMammal2) {
         this.name = name2;
         this.age = age2;
         this.isMammal = isMammal2;
     }
}

class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }
    eat() {
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);
    }
    fly() {
        return `${this.name} sedang terbang!`
    }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);
myRabbit.eat();
myEagle.fly();
console.log(myRabbit.eat());
console.log(myEagle.fly());
