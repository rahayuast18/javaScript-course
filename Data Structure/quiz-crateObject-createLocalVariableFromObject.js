const restaurant = {
    name: "Rahayu",
    city: "Bekasi",
    "favorite drink": "White Milk",
    "favorite food": "Sweet food",
    isVegan: false
}

const {name: name, "favorite drink": favoriteDrink} = restaurant;

console.log(restaurant);
console.log(name);
console.log(favoriteDrink);