let marks1=98;
   if (marks1>=95){
    console.log("A+ Grade");
}
    if (marks1>=90){
        console.log("A Grade");
}
        if (marks1>=70){
           console.log("B Grade");
} 

           if(marks1>=35){
            console.log("You passed ");
           }
        

   else{
    console.log("you failed!!!");
   } 
   /***o/p [Running] node "e:\Javascript_01\Basicprogram\ifElseLoop.js"
    * if consolated if {
    * if{
    * }
    * } like this
A+ Grade
A Grade
B Grade
You passed 
   **/
  // But same output getting if loops are seperated

// If else loop
console.log("=================================");
let marks =92;
 if (marks>=95){
    console.log("A+ Grade");
 }
 else if (marks>=85){
    console.log("A Grade");
 }
 else if (marks>=70){
    console.log("B Grade");
 }

 else if (marks==35){
    console.log("C Grade ,You are recieving just passing marks");
 }

 else {
    console.log("your failed");
 }