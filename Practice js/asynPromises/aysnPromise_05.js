function firstfunction(){
    console.log("first function is iniated");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("First function complted");
        }, 2000);
    })
}

function secondFunction(){
 console.log("second function intiated");
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("second function completed");
    }, 3000);  
 })
}

async function taskexcution() {
    let reultforfirst =await firstfunction();
    console.log(reultforfirst);

    console.log("======================");
    
    let resultforsecond =await secondFunction();
    console.log(resultforsecond);
}
taskexcution();