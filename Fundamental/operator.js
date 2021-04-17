// Assignment Operator
let a = 10;
let b = 5
a += b;
console.log(a);

let x = 10;
let y = 5;
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

// Comparison Operator
let c = 10;
let d = 12;
console.log(c < d);
console.log(c > d);

// Perbedaan antara “Sama” dan “Identik”
const aString = '10';
const aNumber = 10
console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// Logical Operator
let e = 10;
let f = 12;

/* AND operator */
console.log(e < 15 && f > 10); // (true && true) -> true
console.log(e > 15 && f > 10); // (false && true) -> false

/* OR operator */
console.log(e < 15 || f > 10); // (true || true) -> true
console.log(e > 15 || f > 10); // (false || true) -> true

/* NOT operator */
console.log(!(e < 15)); // !(true) -> false
console.log(!(e < 15 && f > 10)); // !(true && true) -> !(true) -> false

