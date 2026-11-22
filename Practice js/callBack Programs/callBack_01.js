
let dev =function(){
    console.log("Code deploye in prodcution");
}

let prod =function(callback){
callback();// dev function line display 
console.log("Project live now");
}

prod(dev);
