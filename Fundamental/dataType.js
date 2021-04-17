// undefined
let i;
console.log(typeof(i));

//--------------------------------------------------
// Numbers
let x = 10;
console.log(typeof(x))

let y = 17.25;
console.log(typeof(y))

let a = 12;
let b = 9;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

//--------------------------------------------------
// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(myInt);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

//--------------------------------------------------
// Strings
let greet1 = "Hello";
console.log(typeof(greet1))

const question = '"What do you think of JavaScript?" I asked';
console.log(question)

const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

let greet2 = "Hello";
let moreGreet = greet2 + greet2;
console.log(moreGreet);

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

//--------------------------------------------------
// Boolean
let e = true;
let f = false;
console.log(typeof(e))
console.log(typeof(f))

const c = 10;
const d = 12;
let isGreater = c > d;
let isLess = c < d;
console.log(isGreater);
console.log(isLess);

//--------------------------------------------------
// Null
let someLaterData = null;
console.log(someLaterData);

//--------------------------------------------------
// Symbol
const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);