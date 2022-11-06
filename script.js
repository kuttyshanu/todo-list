// creating an xhr oject
var xhttp = new XMLHttpRequest();
// event listner
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var res = JSON.parse(this.responseText);
		var out =
			"<table> <tr><th>No.</th><th>Task</th><th>Completed</th></tr><tr class='spacer'><td colspan='100'></td></tr>";
		for (let i = 0; i < res.length; i++) {
			out += "<tr> <th>" + res[i].id + "</th>" + "<th>" + res[i].title + "</th>" + "<th> ";
			out +=
				checkval(res[i].completed, i) +
				"</th>" +
				"</tr><tr class='spacer'><td colspan='100'></td></tr>";
		}
		out += "</table>";
		document.getElementById("demo").innerHTML = out;
	}
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

function checkval(bool, i) {
	var id = "id" + i;
	var boolval = "false";
	var code1 = "<label class='container'>";
	var code2;
	var code3 = "<span class='mark'></span></label>";
	if (bool == true) {
		code2 = `<input type='checkbox' id='id'+${i} checked='true' disabled='true'>`;
	} else {
		code2 = `<input type='checkbox' id='id'+${i}   onchange='completetask(this);'>  `;
	}

	return code1 + code2 + code3;
}

var count = 0;

function completetask(checkbox) {
	if (checkbox.checked == true) {
		count++;
	} else {
		count--;
	}
	var promise = new Promise(function (resolve, reject) {
		if (count == 5) {
			resolve("Congrats! 5 Tasks have been Successfully Completed.");
		} else {
			if (count < 5) {
				reject(5 - count + " more tasks needed");
			}
		}
	});

	promise
		.then(function (s) {
			alert(s);
		})
		.catch(function (s) {
			console.log(s);
		});
}
