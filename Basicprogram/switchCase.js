let broswer ="IE";

switch(broswer)// brower is the key 
{

case "chrome" :
    console.log ("Welcome to chrome");
   return broswer;

case "Edge" :    
     console.log ("Welcome to Edge");
 return broswer;

case "safari" :    
     console.log ("Welcome to safari");
 return broswer;
 

case "yahoo" :    
     console.log ("Welcome to yahoo");
     return broswer;
      //break;

      /**If you have not entred break then o/p will be like this
       * Welcome to chrome
Welcome to Edge
Welcome to safari
Welcome to yahoo
       */

default :
console.log( "Please pass correct broswer");
}