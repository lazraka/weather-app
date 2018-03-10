
// console.log(parseInt(document.getElementById('fieldname').value));
// console.log(num)
var num;
document.getElementById('submit-button').onclick = function(){
	num=parseInt(document.getElementById('fieldname').value)
	document.getElementById('celsius').innerHTML = num;
	num = (num * 1.8) + 32;
	document.getElementById('fahrenheit').innerHTML = num;
	determineSeason(num);
}

function determineSeason(temp){
	if (temp <= 32){
		document.body.style.backgroundColor = "grey";
	}
	else if (temp>32 && temp<=50){
		document.body.style.backgroundColor = "blue";
		}
	else if (temp>50 && temp<=80){
		document.body.style.backgroundColor = "orange";
		}
	else if (temp>80){
		document.body.style.backgroundColor = "yellow";
		}
}
