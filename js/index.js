
// console.log(parseInt(document.getElementById('fieldname').value));
// console.log(num)
var num;
document.getElementById('submit-button').onclick = function(){
	num=parseInt(document.getElementById('fieldname').value)
	document.getElementById('celsius').innerHTML = "The temperature in Celsius: "+num;
	num = (num * 1.8) + 32;
	document.getElementById('fahrenheit').innerHTML = "The temperature in Fahrenheit: "+num;
	determineSeason(num);
}

function determineSeason(temp){
	if (temp <= 32){
		document.body.style.backgroundColor = "grey";
		document.getElementById('season').innerHTML = "It is now Winter!";
	}
	else if (temp>32 && temp<=50){
		document.body.style.backgroundColor = "blue";
		document.getElementById('season').innerHTML = "It is now Fall!";
		}
	else if (temp>50 && temp<=80){
		document.body.style.backgroundColor = "orange";
		document.getElementById('season').innerHTML = "It is now Spring!";
		}
	else if (temp>80){
		document.body.style.backgroundColor = "yellow";
		document.getElementById('season').innerHTML = "It is now Summer!";
		}
}
