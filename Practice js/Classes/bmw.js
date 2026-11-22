
import { Car } from "./car.js"; 

class BMW extends Car{

    start(){
        console.log("button start car");
    }

    parkingAssistant(){
        console.log(" the car to park itself");
    } 
}
console.log("code is running");
let bmwobj=new BMW();
bmwobj.start();
bmwobj.stop();
bmwobj.parkingAssistant();



