const profile = {
    firstName: "John",
    "last Name": "Doe",
    age: 18
}
 
const {firstName: localFirstName, "last Name": localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);