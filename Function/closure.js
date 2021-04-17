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
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());