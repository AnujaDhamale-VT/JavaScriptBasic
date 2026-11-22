function fetchData(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("user data");
    }, 3000);
});

}



async function getData() {
    console.log("Getting data from the user");
    
     let timeout=await fetchData();
     console.log(timeout); 
   console.log("Data is  fetching");
    };



getData();