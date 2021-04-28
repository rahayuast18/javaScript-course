// Imperatif
{
    const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
    const newNamesWithExcMark = [];
    
    for(let i = 0; i < names.length; i++) {
        newNamesWithExcMark.push(`${names[i]}!`);
    }
    
    console.log(newNamesWithExcMark);
}
//--------------------------------------------------
// Deklaratif
{
    const names = ['Jemi', 'Acha', 'Bery', 'Bharya'];
    const newNamesWithExcMark2 = names.map((name) => `${name}!`);
    console.log(newNamesWithExcMark2);
}
