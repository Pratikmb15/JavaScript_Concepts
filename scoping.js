
let globalVar = "I'm global";

function testScope() {
    // Function Scope
    let functionVar = "I'm inside a function";
    console.log(globalVar); // Can access global variable
    console.log(functionVar); // Can access function-scoped variable

    if (true) {
        
        let blockVar = "I'm inside a block";
        console.log(blockVar); // Accessible here
    }
    // console.log(blockVar); // Error: blockVar is not accessible outside the block
}

testScope();

// console.log(functionVar); // Error: functionVar is not accessible outside the function
console.log(globalVar); // Can access global variable outside the function