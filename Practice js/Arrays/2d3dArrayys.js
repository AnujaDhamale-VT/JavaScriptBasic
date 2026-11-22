let a=[
    [10,20,30],
    [40,50,60],
    [70,80,90],
];

for (let i=0;i<a.length;i++)//row
{
    //column
   for (j=0;j<a[i].length;j++)
    {
             process.stdout.write (`${a[i][j]} `);//addimg back tick,curly barckets and after that space
        //to print actual output

           //console.log(a[i][j]);// this will print on vertically
   }
   process.stdout.write('\n');
}
console.log("**************************************************")
//Jagged array
let marks=[[10,20,30,40],
[100],
[4000,5000],
[1,2,3,4,5]
]
for(i=0;i<marks.length;i++){
    
    for (j=0; j<marks[i].length; j++)
    {
        process.stdout.write (`${marks[i][j]} `);
    }

    process.stdout.write ('\n');
}