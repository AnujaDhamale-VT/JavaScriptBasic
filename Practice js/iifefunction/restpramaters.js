let obj={
    name :'Tom',
    age :20,
};
obj=undefined;
//console.log(obj.name); //--> will give you error
console.log (obj ?.name);
console.log ("Hello world");// this line never get printed if statment is console.log(obj.name)
 
console.log("*********Rest parameter **************");

function selectemployeedetails(name,...details) // ....details is not common 
{
console.log ("Employee name is "+ name);
console.log("Employee details " +details);

for (let e of details){
    console.log(e);
}
}
selectemployeedetails ('Anuja','101','30','Test Lead','Pune','15 LPA');
