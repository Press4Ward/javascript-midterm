/* CIST 1520 JavaScipt Midterm Project
Author: Terry Wells
Date: 10/24/2017
Filename: project.js

*/

"use strict";
var sum = 0; 
var inputValues = document.querySelectorAll("input");


// create function to instantiate five elements and sum integers
function calcTotal() {
	for (var i = 0; i < inputValues.length; i++) {
		sum += inputValues[i].value * 1;
	}
	document.querySelector(".sum").innerHTML = sum;
}
//function to clear form
function resetForm() {
if(document.getElementById) {
	document.form.text.value = ""
}
}

//event listeners to call the function
var submitButton = document.getElementById("button");
if (submitButton.addEventListener) {
	submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent) {
	submitButton.attachEvent ("onclick", calcTotal);
}

// reset button on form to reenter calculations
function myFunction() {
    alert("The form was reset");
}