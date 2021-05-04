//--------------------------------------------------
// SALAH
const profile2 = {
    firstName: "Jerry",
    lastName: "Doe",
    age: 18
}
 
const firstName2 = profile2.firstName
const lastName2 = profile2.lastName
const age2 = profile2.age
 
console.log(firstName2, lastName2, age2)

//--------------------------------------------------
// BETUL
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);