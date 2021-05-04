//--------------------------------------------------
// SALAH
const foods = ['Pie', 'Cake', 'Honey']
 
const myFood = foods[0]
const yourFood = foods[1]
const ourFood = foods[2]
 
console.log(myFood, yourFood, ourFood)

//--------------------------------------------------
// BENAR
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

//--------------------------------------------------
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , third2Food ] = favorites2;

console.log(third2Food);