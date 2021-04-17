const favorites = ["Seafood"];

// const [myFood, herFood] = favorites
/* output:
Seafood
undefined
*/
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);