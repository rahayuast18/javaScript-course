let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

console.log(myArray[1]);

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

myArray.push('JavaScript'); // menambahkan data di akhir array
console.log(myArray);

myArray.pop(); // mengeluarkan data di akhir array
console.log(myArray);

myArray.shift(); // mengeluarkan data di awal array
myArray.unshift("Apple"); // menambah data di awal array
console.log(myArray);

delete myArray[1]; // menghapus value array
console.log(myArray);
/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);
/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/