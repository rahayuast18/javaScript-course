function greetings() {
    console.log("Good Morning!")
}

greetings();

//--------------------------------------------------
function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "French");

//--------------------------------------------------
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

//--------------------------------------------------
function greetingToo(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greetingToo("Ayu", "French");
console.log(greetingMessage);

//--------------------------------------------------
// Expression Function
const greet = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greet('Ron', 'English'));
