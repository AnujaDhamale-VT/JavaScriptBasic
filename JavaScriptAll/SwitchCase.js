let broswer ='O P E R A';

switch (broswer.trim().toLowerCase().replaceAll(" ", "")) {
    case 'firefox':
        console.log('This is firefox broswer');
        break;

    case 'opera':
    console.log('This is opera broswer');
    break;

   
    case 'chrome':
    console.log('This is chrome broswer');
    break;
 
    
    case 'edge':
    console.log('This is edge broswer');
    break;


    default:
         console.log('Please check your broswer');
        break;
}

//Nested Switch
let env='dev';
let username= 'admin';

switch (env) {
    case 'QA':
      console.log("welcome to the QA Env");       
        
switch (username) {
    case 'admin':
      console.log("username logged in");       
    break;

    default:
        console.log("not a correct env");
        break;
}

break;
    default:
         console.log("not a correct username");
        break;
}