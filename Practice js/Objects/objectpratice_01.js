let user ={
    name:" Anuja", 
    age :30,
    city :'Pune',
    company :'IBM',
    car : 'BMW',

}; //HERE We can write semicolon after end of decalartion of object
/// only comma to end statement
console.log(user);
console.log("***********************");
console.log(user.name);
//console.log(user.location);//undefined
console.log(user.car);
delete user.car;
console.log("***********************");
console.log(user);