/*function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
console.log(employee1.fullName()+"\n");  
console.log(employee2.fullName()); */

function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.company="Prograd"  
  
var employee1=new Employee("Harika","Sirandas");  
var employee2=new Employee("Priya", "Nuthana");  
console.log(employee1.firstName+" "+employee1.lastName+" "+employee1.company);  
console.log(employee2.firstName+" "+employee2.lastName+" "+employee2.company);  
