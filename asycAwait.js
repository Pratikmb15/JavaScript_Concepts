// function fetchData(){
//     return new Promise((resolve)=>
//         {setTimeout(()=>resolve('data fetched successfully'),2000)})
// }

// async function main() {
//     console.log('Fetching data ...');
//     const result =await fetchData();
//     console.log(result)
// }

// main();


function api(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        console.log('weather data');
        resolve(200);
    },2000)})
}


async function getWeatherData(){
    await api();
}

getWeatherData();

function getData(dataId){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        console.log(' data : ',dataId);
        resolve(200);
    },2000)})
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();