// if number with "" except + sign then it wil consider as integer only
// 1-"1" .. output 0;

// Addition -it should done concations

console.log(1+"1"); // o/p is 11

console.log("======================");

//substraction

console.log(1-"2");
console.log("4"-1);

console.log("======================");
// multiplicatiom

console.log("2"*9);

console.log("======================");
// Divison

console.log (8/ "2");
console.log("======================");
console.log (2/ "0");
console.log ("0"/2);
console.log ("0"/ "0");
console.log (0.0/ "0");
console.log(0.0/0.0);
console.log(0/0);

console.log("======================");
console.log("Unary operator");
 let billamount=-1000;
 console.log(-billamount+400);// (-) adding sign 
 // other method
 console.log("======================");
 (console.log(Number.parseInt(billamount)+300));

 console.log("======================");
let bill =200.56;
(console.log(Number.parseInt(bill)));
 console.log("======================");
 let Emi=41500.98;
 console.log(Number.parseFloat(Emi)+0.5);
console.log("======================");
 let Emi1="xx41500.98";
 console.log(Number.parseFloat(Emi1));

 console.log("======================");
 let Emi2="41500cvh.98";
 console.log(Number.parseFloat(Emi2));

 console.log("======================");
 let Emi3="41500.98cdtr;
 console.log(Number.parseFloat(Emi3));