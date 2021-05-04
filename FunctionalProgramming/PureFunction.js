// Impure
{
    const createPersonWithAge = (age, person) => {
        person.age = age;
        return person;
    };
      
    const person = {
        name: 'Bobo'
    };
      
    const newPerson = createPersonWithAge(18, person);
      
    console.log({
        person,
        newPerson
    });

    /**
    * Output:
    *  { 
    *    person: { name: 'Bobo', age: 18 } ,
    *    newPerson: { name: 'Bobo', age: 18 } 
    *  }
    */
}

//--------------------------------------------------
// Pure
/*
* Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi 
* untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya
*/

{
    const createPersonWithAge2 = (age, person2) => {
        return { ...person2, age };
    };
      
    const person2 = {
        name: 'Jeni'
    };
      
    const newPerson2 = createPersonWithAge2(19, person2);
      
    console.log({
        person2,
        newPerson2
    });     
      
    /**
    * Output:
    *  { 
    *    person: { name: 'Bobo' },
    *    newPerson: { name: 'Bobo', age: 18 } 
    *  }
    */
}