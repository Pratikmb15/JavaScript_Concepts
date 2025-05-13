//1. Function as an Argument
function greet(name){
    console.log(`hello, ${name}`);
}
function greetUser(name,callback){
    callback(name);
}

greetUser('Pratik',greet);//output : hello, Pratik

//2. Function returning function
function multiplier(factor){
    return function (number){
       return factor*number
    }
}

const double = multiplier(5);
console.log(double(7));// output : 35