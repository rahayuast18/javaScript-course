const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(...favorites); // console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

const allFavorites = [favorites, others];
console.log(allFavorites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const allFavorites2 = [...favorites, ...others];
console.log(allFavorites2);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

const allFavorites3 = [...favorites, ...others];
console.log(...allFavorites3);