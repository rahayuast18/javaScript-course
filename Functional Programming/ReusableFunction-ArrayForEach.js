// Imperatif
{
    const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
    for(let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
    }
}

// Deklaratif
{
    const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
    names.forEach((name) => {
    console.log(`Hello, ${name}`);
    });
}

//--------------------------------------------------
{
    const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
    
    for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue; // Bisa!
    
    console.log(`Hello, ${names[i]}!`);
    }
    
    // names.forEach((name) => {
    // if(names[i] === 'Jeff') continue; // Tidak Bisa!
    // console.log(`Hello, ${name}`);
    // });
}