let name = 'Pratik';
console.log(name.toLowerCase());//pratik


let char = name.charAt(1);
console.log(char);//r

let lastName = 'Bagul';
let fullName = name.concat(' ',lastName);
console.log(fullName);//Pratik Bagul
console.log(fullName.toUpperCase());//PRATIK BAGUL

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);//true

let index= text.indexOf('to');
console.log(`Index of to is : ${index}`);//Index of to is : 21

myTextArray = text.split(' ');
console.log(myTextArray);//[ 'Hello', 'world,', 'welcome', 'to', 'the', 'universe.' ]

console.log(text.startsWith('Hello'));//true
