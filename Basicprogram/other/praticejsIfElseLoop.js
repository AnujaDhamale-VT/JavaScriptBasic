//  Write a program that checks whether a number is even or odd.

let x=10;
if(x%2==0)
{
    console.log(x + " is even number");

}
else{
    console.log(x + " is odd number");
}

//Positive (more than 0), Negative (less than 0), or Zero

let num= 0.0;
if (num>0)
{
    console.log( num + " is postive number");

}

else if(num<0){
    console.log( num + " is Negavtive number");
}

else{
    console.log( num + " is consider as zero");
}

//Largest of Two Numbers

let c=100;
let p=20;

if (c<p){
    console.log ( p +" is largest number");
}

else {
    console.log(c +" is largest number");
}


// Grade Calculator
/*
A (90–100)

B (80–89)

C (70–79)

D (60–69)

F (below 60)
*/

let grade = 38;
//using & operator
if ( grade>=90 && grade<=100)
{
  console.log ("A Grade!");

}
else if ( grade>=80 && grade<=89)
    {
      console.log ("B+ Grade!");
}

else if ( grade>=70 && grade<=79)
    {
      console.log ("B Grade!");
}


else if ( grade>=60 && grade<=69)
    {
      console.log ("C Grade!");
}


else if ( grade>=40 && grade<=59)
    {
      console.log ("D Grade!");
}

else {
    console.log ("You are failed !! " + grade + " is your score");
}