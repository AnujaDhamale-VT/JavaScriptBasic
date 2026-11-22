
let myPromises = new Promise ((resolve ,reject)=>{

    let success=true;0

    if(success)(
     resolve("Task completed")

    )
    else{
        reject("Task failed")
    }
    });

    myPromises.then((result)=>{
        console.log(result);
    }).catch((error)=>{
     console.log(error);   
    });
    