var result = 0;
var dot = 0;
var sign = "";
var num1 = 0;
var num2 = 0;
var i = -1;
var k = 0;
var s = 0;
function equal() {	
	if (sign == "") {
		result = num1
	}
	if (sign == "+") {
		result = num1 + num2;
	}
	if (sign == "-") {
		result = num1 - num2;
	}
	if (sign == "×") {
		result = num1 * num2;
	}
	if (sign == "÷" && num2 != 0) {
		result = num1 / num2;
	}
	if (sign == "÷" && num2 == 0){
	 	result = "syntax error";
	}
	if (num1 ==0 && num2 == 0) {
		document.getElementById("result1").value =" ";
	}
	if (num1 != 0 && num2 != 0) {
		document.getElementById("result1").value = num1 + sign + num2;
	}
	num1 = result;
	num2 = 0;
	sign = "";
	document.getElementById("result").value = result;
}
function sum() {
	if(k == 100){
		document.write("The number is " + s);
		document.write("<br/>");
	}
	if(k < 100){
		s = s + k + 1;
		k++;
		sum();
	}
}
function C() {
	document.getElementById("result").value = "0";
}
function AC() {
	num1 = 0;
	num2 = 0;
	sign = "";
	result = 0; 
	document.getElementById("result").value = 0;
	document.getElementById("result1").value = " ";
}
function ans() {
	if (num1 == result && num2 == 0) {
		document.getElementById("result").value = num1;
	}
	if (sign != "") {
		num2 = result;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function dotdot() {	
	if (sign == "") {
		dot =1;
		document.getElementById("result").value = num1 + ".";
	}
	if (sign != "") {
		dot = 2;
		document.getElementById("result").value = num1 + sign + num2 + ".";
	}
}
function reset() {
	i = -1;
	dot = 0;
}
function plus() {
	sign = "+";
	document.getElementById("result").value = num1 + sign;
	reset();
}
function minus() {
	sign = "-";
	document.getElementById("result").value = num1 + sign;
	reset();
}
function multiply() {
	sign = "×";
	document.getElementById("result").value = num1 + sign;
	reset();
}
function division() {
	sign = "÷";
	document.getElementById("result").value = num1 + sign;
	reset();
}
function seven() {
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 7;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*7;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*7;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 7;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 7;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 7;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function eight() {
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 8;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*8;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*8;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 8;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 8;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 8;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function nine() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 9;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*9;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*9;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 9;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 9;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 9;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function four() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 4;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*4;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*4;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 4;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 4;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 4;
		document.getElementById("result").value = num1 + sign + num2;
	}
}

function five() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 5;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*5;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*5;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 5;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 5;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 5;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function six() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 6;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*6;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*6;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 6;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 6;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 6;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function zero() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 0;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*0;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*0;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 0;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 0;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 0;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function one() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 1;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*1;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*1;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
}
function two() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 2;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*2;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*2;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 2;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 2;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 2;
		document.getElementById("result").value = num1 + sign + num2;
	}
}

function three() {	
	if (num1 != 0 && sign =="" && dot == 0) {
		num1 = num1 * 10 + 3;
		document.getElementById("result").value = num1;
	}
	else if (sign == "" && dot == 1) {
		num1 = num1 + (Math.pow(10,i))*3;
		i -= 1;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && sign != "" && dot == 2) {
		num2 = num2 + (Math.pow(10,i))*3;
		i -= 1;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else if (sign == "") {
		num1 = 3;
		document.getElementById("result").value = num1;
	}
	else if (num2 != 0 && dot == 0) {
		num2 = num2 *10 + 3;
		document.getElementById("result").value = num1 + sign + num2;
	}
	else {
		num2 = 3;
		document.getElementById("result").value = num1 + sign + num2;
	}
}