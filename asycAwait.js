function fetchData(){
    return new Promise((resolve)=>
        {setTimeout(()=>resolve('data fetched successfully'),2000)})
}

async function main() {
    console.log('Fetching data ...');
    const result =await fetchData();
    console.log(result)
}

main();