// function sum(a,b,callback){
//     let result = a+b;
//     callback(result)
// }

// function displayResult(val){
//     console.log('result : ',val)
// }

// sum(2,4,displayResult);


function processData(){
    console.log('Processing Data..');
}
// function fetchData(callback){
//     setTimeout(()=>
//     {console.log('Data Fetched');
// callback();
// },2000)
// }
// output:
// Data Fetched
// Processing Data..


function fetchData(callback){
    callback();
    setTimeout(()=>
    {console.log('Data Fetched');
},2000)
}
// // output:
// // Processing Data..
// // Data Fetched


fetchData(processData);