/*
* WeakMap merupakan varian dari Map yang mendukung garbage collection.
* Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai 
* key karena tidak mendukung garbage collection.
* WeakMap memiliki methodget(), set(), has(), dan delete(). 
* Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki 
* method keys(), values(), atau forEach().
* WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah 
* karena proses garbage collection.
*/

//--------------------------------------------------
// CODE MAP
let visitsCountMap = new Map(); // Menyimpan daftar user
 
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
 
let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"
 
jonas = null;                    // Data object "Jonas" dihapus
 
console.log(visitsCountMap);
 
/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

//--------------------------------------------------
// CODE WEAK MAP

let visitsCountMap2 = new WeakMap(); // Menyimpan daftar user

function countUser2(user2) {
    let count2 = visitsCountMap2.get(user2) || 0;
    visitsCountMap2.set(user2, count2 + 1);
}

let blue = { name: "Blue" };
countUser(blue);                // Menambahkan user "Blue"

blue= null;                    // Data object "Blue" dihapus

console.log(visitsCountMap2);

/* output
WeakMap { <items unknown> }
*/

//--------------------------------------------------
/*
* WeakSet adalah versi weak reference dari Set.
* WeakSet tidak bisa menyimpan nilai primitif.
* WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
* WeakSet tidak memiliki properti size.
*/