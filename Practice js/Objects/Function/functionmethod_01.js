// Simple function -No input and no return

function test ()
{
    console.log("This is simple function");
}

//Function type -2 // no input but some return
console.log("********************************");

function getcolleagename(){
    console.log("your college name ");
    let collegename = "SK Somiya";
    return collegename;
    
}

// Function type-3 Some input and some return/ 
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function addition (a,b)
{
  let c= a+ b;
   return c;

}
// to calling function
test();
console.log("********************************");
let college =getcolleagename();// if you print getcolleagename() then it will not print college name sk hence storing into another function 
console.log(college);
console.log("********************************");
let sum =addition(10,20);
console.log(sum);
