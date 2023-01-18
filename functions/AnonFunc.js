
	var greet = function () {
		console.log("Good Morning");
	};
	greet();


	var greet = function (platform) {
		console.log("Welcome to ", platform);
	};
	greet("Prograd");

    setTimeout(function () {
        console.log("Hello!");
    }, 2000);

    (() => {
        console.log("Good Day!!");
      })();
