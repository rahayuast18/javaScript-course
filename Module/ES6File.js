// Jika module hanya 1 value
//import stock from "./ES6Module.js";
//import coffeeStock from './ES6Module.js';

// Jika module lebih dari 1 value
/* Karena named import menggunakan teknik destructuring object untuk mendapatkan nilai, 
* maka pastikan penamaan variabel sesuai dengan nama variabel yang diekspor.
*/
import { coffeeStock as stock, isCoffeeMachineReady } from './ES6Module.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(stock);
// displayStock(coffeeStock);