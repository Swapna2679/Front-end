/*class Employee {  
  constructor() {  
    this.id= 121;  
    this.name = "Srija Kotha";  
  }   
}  
var emp = new Employee();  
console.log(emp.id+" "+emp.name); */

class CompanyName  
{  
  constructor()  
  {  
    this.company="Prograd";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(127,"Swapna");  
console.log(emp.id+" "+emp.name+" "+emp.company);  