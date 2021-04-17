//--------------------------------------------------
// Regular function

// / function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

//--------------------------------------------------
// Arrow function

// function expression
const sayHello2 = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName2 = (name) => {
    console.log(`Nama saya ${name}`)
}

//--------------------------------------------------
const sayName3 = name => {
    console.log(`Nama saya ${name}`)
}

sayName3("Leia");

//--------------------------------------------------
const sayHello3 = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello3();

//--------------------------------------------------
const sayName4 = name => console.log(`Nama saya ${name}`);
sayName4("Ayu");

const sayHello4 = () => console.log("Selamat sore semuanya!");
sayHello4();

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));