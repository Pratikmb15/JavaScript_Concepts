let promise = new Promise(function(resolve,reject){
    let success = true;
    if(success){
        resolve('Promise resolved successfully');
    }else
    reject('promise rejected ');
})

promise.then((res)=> console.log(res)).catch((err)=>console.log(err));

function getData(dataId){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    console.log('data ',dataId);
    resolve("success")
}, 3000);
    })
}

//promise chain

getData(1)
.then((res)=> {return getData(2);})          //output: data  1
.then((res)=>{return getData(3)})            //data  2
.then((res)=> {console.log(res)})           //data  3 
                                            //success