const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
// const {firstName, age, isMale} = profile;
/* output:
John
18
undefined
*/
const {firstName, age, isMale = false} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)