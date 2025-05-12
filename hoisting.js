greet();//function hoisting 
function greet(){
    console.log('Hello!');
}

console.log(a);//output : undefined ( hoisting on Variable declaration not on initialization )
var a = 10;
console.log(a);//output: 10

// hoistedFunctionExpression(); {not allowed only function declaration is hoisted not the assigned function expression}
var hoistedFunctionExpression = function(){
    console.log('This is hoisted function');
}
hoistedFunctionExpression();
//output : This is hoisted function