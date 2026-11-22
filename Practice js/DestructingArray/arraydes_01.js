let [a,b,c]=[10,20,30];
console.log(a,b,c);

console.log("================");

let arr=[10,20,30,40];
//let [w,x,y,z]=arr ;
//console.log(w,x,y,z);

let[p,...pop]=arr;
console.log(p);
console.log("===");
console.log(pop);
console.log("====");
console.log(arr);

console.log("================");
let user={
    name: 'sunita',
    age :45

};

let {name, age}=user;
console.log(name,age);