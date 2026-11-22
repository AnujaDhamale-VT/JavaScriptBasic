let number =[2,3,4,8,9];

let q3= number.map(e=>e*3);
console.log(q3);

let stringArr =['divya','monali','kirti','keshav','madhav'];
let strarr= stringArr.map(n=>n.toUpperCase());// n represent value here
console.log(strarr);

console.log("==========================");
let number1= [10,20,60,50,12.23,49,59,31,30.50];
let a1= number1.filter(n=>n>30);
console.log("filter function");
console.log(a1);

console.log("==========================");

let num= [1,2,3,4,5,6,7,8,19,40,50];
let evennum= num.filter(n=>n % 2==0);
console.log("Here is your even number list : "+evennum);    

console.log("==========================");

let as= ["Apple MagSafe Charger","Apple EarPods", "Apple Magic Mouse","Apple HomePod mini","ipad","macbook"];    
let appproduct=(as.filter(n=>n.startsWith("Apple")));

console.log(appproduct);

console.log("==========================");
console.log("Reduce function");

let sum1= [1,2,3,4,5,6];
let singlevalue= sum1.reduce((a,b)=>a+b,0);// 0 is initialization purpose 
console.log(singlevalue);

/*
logic behind reduce sum -> combine all together
Start: accumulator = 0 (initial value), curr = 1
Step 1: 0 + 1 = 1 → 
Step 2: 1 + 2 = 3
Step 3: 3 + 3 = 6
Step 4: 6 + 4 = 10 
step 5: 10 + 5 =15
step 6: 15 + 6 =21



*/