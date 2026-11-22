
//Reassignment -with var
console.log ("var introduction-->")
var x= 2000;
var x=400;
console.log(x); // output should be latest value.

console.log("------------------------------------");

//Hositing - with var
console.log(y);// output should be Undefined.
var y=100;

console.log("------------------------------------");

// Redeclartion-
var z =100;
z=200;
z=900;
console.log(z); // Output should nbe latest value.
console.log("------------------------------------");
console.log ("let introduction--->");

// Reassignment -not allow in let
let a=100;
//let a=200;--> this line gives error  SyntaxError: Identifier 'a' has already been declared
console.log(a);
console.log("------------------------------------");
//Hositing - not allow in let

//console.log(b);// output-Cannot access 'b' before initialization
//let b=300;
console.log("------------------------------------");
// Redeclartion-
var ab =100;
ab=200;
ab=600;
console.log(ab);
console.log("------------------------------------");

console.log ("Const introduction--->");

// Reassignment -not allow in Const
const final=100;
final=200;
//console.log(final);// output-->TypeError: Assignment to constant variable.
console.log("------------------------------------");

//hositing --not allow in Const
console.log(h);
//const h=100;// output -->Cannot access 'h' before initialization

//Redecalrtion.--not allow in Const
const j1=200;
j1=300;
j1=900;
//console.log(j1);//Output -->-TypeError: Assignment to constant variable.
