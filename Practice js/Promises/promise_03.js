 
 let p1=new Promise((resolve,reject)=>{
     setTimeout(() => {
        resolve("pl is executed");
     }, 3000);
 })

let p2=new Promise((resolve,reject)=>{
     setTimeout(() => {
        resolve("p2 is executed");
     }, 4000);

 })

 let p3=new Promise((resolve,reject)=>{

    setTimeout(() => {
        reject("p3 is failed");
    }, 1000);
 })

 Promise.race([p1,p2,p3]).then((result)=>{
    console.log(result);

 }).catch((error)=>{
    console.log(error);
 }).finally(()=>{
  console.log("all promises are in thse race");
 })