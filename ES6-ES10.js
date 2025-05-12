'strictly '
//ES6 
//1. let and const
let firstName = "Alice";// can be accesssed only in block
const salary = 25000;// Non reassignable variable

//2. Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // output: 5

//3. Template literals
const userName = "Bob";
console.log(`Hello, ${userName}!`); // Hello, Bob!

//4. Destructoring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name , age);//output : Alice 25

// 5. Promises
const fetchData = () => new Promise((resolve) => resolve("Data received"));
fetchData().then((data) => console.log("Promise:", data));

// ES7 Features
// 6. Exponentiation Operator
console.log("Exponentiation Operator:", 3 ** 2); // 9

// 7. Array.prototype.includes
const nums = [21, 22, 33];
console.log("Includes:", nums.includes(22)); // true

// ES8 Features
// 8. Async/Await
const asyncFetchData = async () => {
    const data = await fetchData();
    console.log("Async/Await:", data);
};
asyncFetchData();

// 9. Object.entries() and Object.values()
const perso = { name: "Pratik", age: 21 };
console.log("Object.entries:", Object.entries(perso));
console.log("Object.values:", Object.values(perso));

// ES9 Features
// 10. Rest/Spread for Objects
const { city = "Mumbai", ...rest } = { name: "Pratik", age: 21, city: "Pune" };
console.log("Rest Operator:", rest);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  
  const nums2 = [1, 2, 3];
  console.log(sum(...nums2)); // 6
  

// ES10-ES14 Features
// 11. Optional Chaining
const user = { address: { city: "Mumbai" } };
console.log("Optional Chaining:", user?.address?.city); // Mumbai

const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]

//Object from entries
const entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }
