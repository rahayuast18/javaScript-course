function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

//--------------------------------------------------
function init2() {
    var name = 'Rahayu';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}

let myFunction = init2();
myFunction();

//--------------------------------------------------
// Digunakan sebagai function factory
function init3(waktu) {
    function greet(name) {
        console.log(`Halo, ${name}. Selamat ${waktu}`);
    }

    return greet;
}

let myFunction2 = init3("pagi");
let myFunction3 = init3("siang");
let myFunction4 = init3("sore");
console.log("--------------------------------------------------")
myFunction2("ikhwan");
myFunction3("ayu");
myFunction4("puji");

//--------------------------------------------------
// Digunakan sebagai private method
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();
counter = 100
console.log("--------------------------------------------------")
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

//--------------------------------------------------
{
    function makeAdder(x) {
        return function(y) {
            return x + y;
        };
    }
      
    var add5 = makeAdder(5); // input nilai x
    var add10 = makeAdder(10); // input nilai x
    
    console.log("--------------------------------------------------")
    console.log(add5(2));  // input nilai y
    console.log(add10(2)); // input nilai y
}

// Jika lupa cek https://www.youtube.com/watch?v=jsW0taT36qU