var names = [];

for (var i = 0; i < 4; i++) {
 	names.push(prompt('Please, enter the name'));
}

var myName = prompt('Please, enter your name');

for (var i = 0; i < names.length - 1; i++) {
	if (names[i] == myName) {
		var login = true;
	}

}

if (login == true) {
	alert('Hello, '+ myName);
}

else {
	alert('Error');
}

