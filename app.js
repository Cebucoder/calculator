
function add(){
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);

	let sum = num1 + num2 ;
	document.getElementById("result").innerHTML = sum.toLocaleString();
}

function sub(){
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);

	let sum = num1 - num2 ;
	document.getElementById("result").innerHTML = sum.toLocaleString();
}

function div(){
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);

	let sum = num1 / num2 ;
	document.getElementById("result").innerHTML = sum.toLocaleString();
}

function mul(){
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);

	let sum = num1 * num2 ;
	document.getElementById("result").innerHTML = sum.toLocaleString();
}