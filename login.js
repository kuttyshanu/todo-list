let usererror = document.getElementById("username-error");

let passerror = document.getElementById("pass-error");

function valid(username, password, callback) {
	var user = false;
	if (username.value == "admin") {
		usererror.style.display = "none";
		username.style.border = "1px solid #ced4da";
		user = true;
	} else if (username.value.trim() == "") {
		usererror.style.display = "block";
		usererror.innerHTML = "Username cannot be empty!";
		usererror.style.color = "red";
		username.style.border = "solid";
		username.style.borderColor = "rgba(255, 0, 0, 0.5)";
		user = false;
	} else {
		usererror.style.display = "block";
		usererror.innerHTML = "Incorrect Username";
		usererror.style.color = "red";
		username.style.border = "solid";
		username.style.borderColor = "rgba(255, 0, 0, 0.5)";
		user = false;
	}

	var pass = false;

	if (password.value == "12345") {
		passerror.style.display = "none";
		password.style.border = "1px solid #ced4da";
		pass = true;
	} else if (password.value == "") {
		passerror.style.display = "block";
		passerror.innerHTML = "Password cannot be empty!";
		passerror.style.color = "red";
		password.style.border = "solid";
		password.style.borderColor = "rgba(255, 0, 0, 0.5)";
		pass = false;
	} else {
		passerror.style.display = "block";
		passerror.innerHTML = "Incorrect Password";
		passerror.style.color = "red";
		password.style.border = "solid";
		password.style.borderColor = "rgba(255, 0, 0, 0.5)";
		pass = false;
	}

	if (user && pass) {
		callback();
	}
	return false;
}

function login() {
	window.location.replace("todo.html");
}
