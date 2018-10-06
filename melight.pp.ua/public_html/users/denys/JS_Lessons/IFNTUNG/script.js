  window.onload = function() {
    var answer = prompt("Hello! Whot is \"oficcial\" name of JavaScript?", "");
    (answer == "ECMAScript") ? alert("Ok, good ;)") : alert("WRONG!");
    var number = prompt("Input some number here");
    (number < 0) ? alert(-1) : (number > 0) ? alert("1") : alert(0);
    var login = prompt("Who are you?", "");
    if(login == null) {
    	alert("Authorization canceled");
    }
    else if(login == "Admin") {
    	var password = prompt("Password", "");
    	if(password == "DarkLord") {
    		alert("Welcome, Administrator");
    	} else if(password == null) {
    		alert("Authorization canceled");
    	} else {
    		alert("Wrong password");
    	}
    }
    else alert("I don\`t know you :(");
  };