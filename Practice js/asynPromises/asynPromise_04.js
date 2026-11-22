
function task() {
    console.log("Please wait task is iniated");
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Task is done");
     },2000);
    })
}

async function printtask() {
    let taskresult= await task();
 console.log(taskresult);
 console.log("Please proceed for another task")
}

printtask();