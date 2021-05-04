const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

const isCoffeeMachineReady = true;

//----- Versi ES6 -----

// Jika hanya 1 value
// export default coffeeStock;

// Jika lebih dari 1 value
export {coffeeStock, isCoffeeMachineReady};