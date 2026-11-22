//allsettled method

let p1=new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("P1 completeted the promise");
  }, 3000);
});

let p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
 reject("P2 failed");
},1000); 

});
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("P3 is completeted the promise");
    },2000);


});

    let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("P3 is completeted the promise");
    },2000);

    });

    /*Promise.all([p1,p2.p3,p4]).then((result)=>{
           console.log(result);
    }).catch((error)=>{
        console.log(error);
    });*/

    /*Promise.allSettled([p1,p2,p3,p4]).then((result)=>{
        console.table(result);
    }).catch((error)=>{
          console.log(error);
        
    });
    */
    Promise.any([p1,p2,p3,p4]).then((result)=>{
        console.table(result);
    }).catch((error)=>{
          console.log(error);
        
    });
    