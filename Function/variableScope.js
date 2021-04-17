/*
* Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, 
* sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.
* Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, 
* maka variabel tersebut akan menjadi global.
*/

// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

