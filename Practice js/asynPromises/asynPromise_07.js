function fetchUserData () {
 console.log("fetching user data");
 return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve({name:"Sudha", age:45})
    }, 3000);
 })
}

async function userdetails() {
let fetchDeatils=await fetchUserData();
console.log(fetchDeatils);
console.log("Details are fetched");
    
}

userdetails();