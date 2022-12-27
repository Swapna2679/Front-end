/*class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
var b=new B();  
b.display();

class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  
    }  
  }  
  
var a= [new A() ,new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  */

function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{    
}   
B.prototype=Object.create(A.prototype);   
var a=[new A(), new B()]   
a.forEach(function(msg)  
{  
  console.log(msg.display());  
});  