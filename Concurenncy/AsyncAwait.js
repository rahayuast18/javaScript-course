{
    const getCoffee = () => {
        return new Promise((resolve, reject) => {
            const seeds = 100;
            setTimeout(() => {
                if (seeds >= 10) {
                    resolve("Kopi didapatkan!");
                } else {
                    reject("Biji kopi habis!");
                }
            }, 1000);
        })
    }

    // Get value dari function getCoffee Async Normal
    function makeCoffee() {
        getCoffee().then(coffee => {
            console.log(coffee);
            console.log("");
        });
    }
    
    makeCoffee();
}

// ----------------------------------------------------
{
    const getCoffee = () => {
        return new Promise((resolve, reject) => {
            const seeds = 100;
            setTimeout(() => {
                if (seeds >= 10) {
                    resolve("Kopi didapatkan yes!");
                } else {
                    reject("Biji kopi habis!");
                }
            }, 1000);
        })
    }

    // Get value dari function getCoffee Async Await
    async function makeCoffee() { 
    // Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan 
    // fungsi makeCoffee() secara asynchronous.
        const coffee = await getCoffee();
        // keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya
        //sampai fungsi getCoffee() mengembalikan nilai promise resolve.
        console.log(coffee);
        console.log("");
    }
     
    makeCoffee();
}

// ----------------------------------------------------
{
    const getCoffee = () => {
        return new Promise((resolve, reject) => {
            const seeds = 1;
            setTimeout(() => {
                if (seeds >= 10) {
                    resolve("Kopi didapatkan yippi!");
                } else {
                    reject("Sad :( Biji kopi habis!");
                }
            }, 1000);
        })
    }

    // Get value dari function getCoffee Async Await (Rejected)
    async function makeCoffee() { 
        try {
            const coffee = await getCoffee();
            console.log(coffee);
        } catch (rejectedReason) {
            console.log(rejectedReason);
            console.log("");
        }
    }

    makeCoffee();
}

// ----------------------------------------------------
{
    const state = {
        stock: {
            coffeeBeans: 150,
            water: 1000,
        },
        isCoffeeMachineBusy: false,
    }

    const checkAvailability = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!state.isCoffeeMachineBusy) {
                    resolve("Mesin kopi siap digunakan.");
                } else {
                    reject("Maaf, mesin sedang sibuk.");
                }
            }, 1000);
        });
    };

    const checkStock = () => {
        return new Promise((resolve, reject) => {
            state.isCoffeeMachineBusy = true;
            setTimeout(() => {
                if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                    resolve("Stok cukup. Bisa membuat kopi.");
                } else {
                    reject("Stok tidak cukup!");
                }
            }, 1500);
        });
    };

    const boilWater = () => {
        return new Promise((resolve, reject) => {
            console.log("Memanaskan air...");
            setTimeout(() => {
                resolve("Air panas sudah siap!");
            }, 2000);
        })
    };
    
    const grindCoffeeBeans = () => {
        return new Promise((resolve, reject) => {
            console.log("Menggiling biji kopi...");
            setTimeout(() => {
                resolve("Kopi sudah siap!");
            }, 1000);
        })
    };

    const brewCoffee = () => {
        console.log("Membuatkan kopi Anda...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Kopi sudah siap!")
            }, 2000);
        });
    };

    // Get value dari function dengan Async Await (Promise All)
    async function makeCoffee() { 
        try {
            await checkAvailability();
            await checkStock();
            await Promise.all([boilWater(), grindCoffeeBeans()]);
            const coffee = await brewCoffee();
            console.log(coffee);
        } catch (rejectedReason) {
            console.log(rejectedReason);
        }
    };
    
    makeCoffee();
}