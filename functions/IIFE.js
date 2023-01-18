 var iife = function (){
    return 'Immediately Invoked Function Expressions(IIFEs) example ';
  }();
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example '

  (function(value){
    var greet = 'Hello';
    console.log(greet+ ' ' + value);
  })('IIFEs');

	function myFunc()
	{
		console.log("Welcome to");
		// This will be executed after executing the previous log.
		(function() { console.log("IIFE!"); })();
		console.log("Hi There!");
	}
	
	// Calling the Function.
	myFunc();

    var a=2;
    (function(){
        var a = 3;
        console.log(a);
      })();
      console.log(a);