
// Arrow function :-
// using for callback
// use when function keyword not written
// 1. no parameter function 

//function()=> console.log("this is arrow function"); -- this gives error because funtion keyword npt required when arrow is 

let name= () =>console.log("this is arrow function without any paramaeter");

name();

//2. with paramaeter function 
console.log("=============================");
let empDetails = (nameofemp,id,postion,department,expreinece)=>{
                  console.log("Here are the details of empplyee");
                  console.log("Employee Name :" + nameofemp);
                  console.log("Employee id :"+id);
                  console.log("Employee Postion :"+postion);
                  console.log("Employee Department :"+department);
                  console.log("Employee expreinece :"+ expreinece);
}
                  empDetails("Anuja","Q1093792","QA","TESTING",4.6);

       console.log("=============================");
       
       let sum =(a,b)=>a+b;
    let p1= sum(10,20);
      console.log("Addition is " + p1);
     //console.log(sum(10,20)); --> this will aslo give you 30 but for good pratice we store in 3rd variable
       console.log("======================");
       let a1=10;
       let b1=20;
       let sum1 =a1+b1;
       console.log(sum1);
