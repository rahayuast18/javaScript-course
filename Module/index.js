console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
console.log("");

// Jika module hanya 1 value
//const coffeeStock = require('./state');

//Jika modlue memiliki banyak value
const {coffeeStock, isCoffeeMachineReady} = require('./state');

console.log(coffeeStock);
console.log("");

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 151);
console.log("");

console.log(isCoffeeMachineReady);

/*
* Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), 
* pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js berada pada
* folder yang sama, maka kita cukup menuliskannya dengan ./state.js.
*/

