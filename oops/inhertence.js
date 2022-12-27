/*class Moment extends Date {  
  constructor() {  
    super();  
  }}  
var m=new Moment();  
console.log("Current date:")  
console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());  

class Bike  
{  
  constructor()  
  {  
    this.company="Honda";  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price) {  
   super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var v = new Vehicle("Shine","70000");  
console.log(v.company+" "+v.name+" "+v.price); */

function Bike(company)  
{  
    this.company=company;   
}  
  
Bike.prototype.getCompany=function()  
{  
  return this.company;  
}  
//Another constructor function  
function Vehicle(name,price) {  
 this.name=name;  
  this.price=price;  
  }   
var bike = new Bike("Honda");  
Vehicle.prototype=bike; //Now Bike treats as a parent of Vehicle.  
var vehicle=new Vehicle("Shine",70000);  
console.log(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);  