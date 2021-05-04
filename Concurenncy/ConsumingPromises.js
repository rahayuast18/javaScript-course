{
    const stock = {
        coffeeBeans: 250,
        water: 1000,
    }
     
    const checkStock = () => {
        return new Promise((resolve, reject) => {
            if (stock.coffeeBeans >= 16 && stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi");
            } else {
                reject("Stok tidak cukup");
            }
        });
    };

    const handleSuccess = resolvedValue => {
        console.log(resolvedValue);
    }
     
    const handleFailure = rejectionReason => {
        console.log(rejectionReason);
    }

    // ----- Bisa pakai ini ------
    //checkStock().then(handleSuccess, handleFailure);

    // ------ onRejected with Catch Method ------
    // ----- Atau pakai ini -----
    // checkStock()
    //     .then(handleSuccess)
    //     .then(null, handleFailure);

    // ----- Atau pakai ini lebih sederhana -----
    checkStock()
        .then(handleSuccess)
        .catch(handleFailure);

    /* checkStock() merupakan fungsi yang mengembalikan promise dan 
    * akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
    *
    * fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
    *
    * method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler 
    * yang telah kita buat sebelumnya.
    * 
    * Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise 
    * berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika 
    * promise berstatus reject.
    */
}