
function selectEmpinfo (...empdetails)// 3 dots acts like array
{
    console.log("Employee Information :"+ empdetails);
    console.log("Employee info lenght : "+empdetails.length);
    console.log("===============");
console.log("Here is employee inforamtion");
    for(let e of empdetails){
        console.log(e);
    }

}

selectEmpinfo("Anuja",29,"Test Engineer","MS-Banking", 5 ,"B+");

