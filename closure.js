function outerFunction(){
let outerFuncVariable = 'I am outer function Variable';

function innerFunction(){
    let innerFuncVariable='I am inner function variable';
    console.log(outerFuncVariable);//inner Function has access to outer function variable due to closure
    console.log(innerFuncVariable);
}
innerFunction();
//console.log(innerFuncVariable);  important note : {outer Finction does'nt have access to inner Function variable due to closure}
}
outerFunction();

// output:
// I am outer function Variable
// I am inner function variable