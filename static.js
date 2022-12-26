/*class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
}  
console.log(Test.display());  

class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
  static display()  
  {  
    return "static method is invoked again"  
  }  
}  
console.log(Test.display());  

class Test  
{  
  static display1()  
  {  
    return "static method is invoked"  
  }  
  static display2()  
  {  
    return "static method is invoked again"  
  }  
}  
console.log(Test.display1());  
console.log(Test.display2()); */


class Test {  
    constructor() {  
    console.log(Test.display());   
    console.log(this.constructor.display());   
    }  
    static display() {  
        return "static method is invoked"  
    }  
  }
  
 /* class Test {  
    static display() {  
        return "static method is invoked"  
    }      
   show() {  
    console.log(Test.display());   
    }    
  }  
  var t=new Test();  
  t.show();  */
  