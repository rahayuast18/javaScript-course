const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);

//--------------------------------------------------
// SALAH
var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

//--------------------------------------------------
// BENAR
let c = 1;
let d = 2;
 
console.log("Sebelum swap");
console.log("Nilai c: " + c);
console.log("Nilai d: " + d);
 
[c, d] = [d, c]
 
console.log("Setelah swap");
console.log("Nilai a: " + c);
console.log("Nilai b: " + d);