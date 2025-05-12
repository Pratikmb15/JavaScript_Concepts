const numbers = [37, 54, 48, 21, 13];

//Length
console.log(numbers.length);

//Foreach
numbers.forEach(x=>console.log(x));
//output
// 5
// 37
// 54
// 48
// 21
// 13

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr,0);
console.log(sum);
//output: 173

//map
const doubledArray = numbers.map(x=>x*2);
console.log(doubledArray);   
// output:             
//[ 74, 108, 96, 42, 26 ]

const evenNumbers = numbers.filter(x=>x%2==0);
console.log(evenNumbers);//output:  [ 54, 48 ]

numbers.push(84);
console.log(numbers);//output : [ 37, 54, 48, 21, 13, 84 ]

numbers.pop();
console.log(numbers);//output : [ 37, 54, 48, 21, 13 ]

numbers.unshift(19);
console.log(numbers);//output : [ 19, 37, 54, 48, 21, 13 ]

numbers.shift();
console.log(numbers);//output : [ 37, 54, 48, 21, 13 ]

numbers.splice(2,0,2.5);//splice(startIndex,deleteCount,insertValue)
console.log(numbers);//output :[ 37, 54, 2.5, 48, 21, 13 ]


console.log(numbers.slice(1,3));//output :[ 54, 2.5 ]

console.log(numbers.sort());//[ 13, 2.5, 21, 37, 48, 54 ]

console.log(numbers.reverse());//[ 54, 48, 37, 21, 2.5, 13 ]

const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.includes('cherry'));//output : true

const found = fruits.find(f=>f.startsWith('b'));
console.log(found);//output : banana

console.log(fruits.indexOf('apple'));//output : 0

const names = ['Alice', 'Bob'];

// join
console.log(names.join(', ')); // "Alice, Bob"

// concat
const moreNames = names.concat(['Charlie']);
console.log(moreNames); // ["Alice", "Bob", "Charlie"]










    