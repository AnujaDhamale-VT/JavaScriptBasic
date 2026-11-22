let customer={
    name:"sunita",
    age:55,
    city:"Mumbai",
    zip:40084
};

function placeorder ({name,city})// name same as object declartion
{
    console.log(name,city);
}

placeorder(customer);// passing object