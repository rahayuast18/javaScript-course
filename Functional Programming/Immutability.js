/*
* Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat
* Dan jika ingin mengubahnya, maka
*/

// KURANG TEPAT
{
    const user = {
        firstname: 'Harry',
        lastName: 'Protter', // ups, typo!
    }
    
    const renameLastNameUser = (newLastName, user) => {
        user.lastName = newLastName;
    }
    
    renameLastNameUser('Potter', user);
    
    console.log(user);
}

// BENAR
{
    const user = {
        firstname: 'Rahayu',
        lastName: 'Assuti', // ups, typo!
    }
    
    const createUserWithNewLastName = (newLastName, user) => {
        return { ...user, lastName: newLastName }
    }
    
    const newUser = createUserWithNewLastName('Astuty', user);
    
    console.log(newUser);
}
