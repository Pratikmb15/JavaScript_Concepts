function* greetGenerator(){
    yield 'Hello';
    yield 'Good Morning';
    yield 'Good Afternoon';
    yield 'Good Evening';
    yield 'Good Night'
}
const greeter = greetGenerator();
console.log(greeter.next());//{ value: 'Hello', done: false }
console.log(greeter.next());//{ value: 'Good Morning', done: false }
console.log(greeter.next());//{ value: 'Good Afternoon', done: false }
console.log(greeter.next());//{ value: 'Good Evening', done: false }
console.log(greeter.next());//{ value: 'Good Night', done: false }
console.log(greeter.next());//{ value: undefined, done: true }

