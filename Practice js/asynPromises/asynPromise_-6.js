function empPrivateInfo(){
    console.log("Details are fetching.....");
    return new Promise((resolve,rejcet)=>{
        setTimeout(()=>{
            rejcet("Your restricted for fetching such details ");
        } ,5000);
    })
}

async function infoe() {
try{
 await empPrivateInfo();
} 
   catch(result){
   console.log(result);
   } 
    
    console.log("Please contact administrator"); 
    //here system throw error so handled by try and catch
}

infoe();