/*
* Function yang berisikan function/me-return function disebut higher order function  
*/

{
    const hello = () => {
        console.log('Hello!')
      };
      
      const say = (someFunction) => {
        someFunction();
      }
      
      const sayHello = () => {
          return () => {
              console.log('Holla!');
          }
      }
      
      hello();
      say(hello);
      sayHello()();
}

//--------------------------------------------------
// Bentuk normal
{
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("--------------------------------------------------")
}

// Lebih sederhana/dimudahkan
{
    function repeatLog(n){
        for (let i = 0; i < n; i++) {
            console.log(i);
        }   
    }

    repeatLog(3);
    console.log("--------------------------------------------------")
}

{
    function repeat(n, action){
        for (let i = 0; i < n; i++) {
            action(i);
        }
    }

    repeat(5, console.log);
}