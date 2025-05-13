//IIFE without parameters
(function fetchData(){
    console.log('Data Feched');
})();

//IIFE for arrow function with parameters
((name)=>{console.log(`Hello, ${name}`)})('Pratik');