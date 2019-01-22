

//  ADD ONE
const line = document.getElementById("colorLine");
const button1 = document.getElementById('buttonColor');
let textField = document.getElementById('textInput');

button1.addEventListener('click', changeColor);

function changeColor() {
  line.style.color = textField.value;
}

//  ADD TWO
	document.getElementById('go').addEventListener('click', add);

	function add() {
		var x = Number(document.getElementById('x').value);
		var y = Number(document.getElementById('y').value);

		document.getElementById('result').innerHTML = x+y;
		return false;
	}

//  ADD THREE
	const button3 = document.getElementById('buttonTry');
	
	button3.addEventListener('click', displayDate);

	function displayDate() {
	  document.getElementById("divThree").innerHTML = Date();
	}


//  ADD FOUR
	const button4 = document.getElementById('overIt');
	
	button4.addEventListener('mouseover', mouseOver);

	function mouseOver() {
	  document.getElementById("divFour").innerHTML += "     MOUSE OVER!!!!   ";
	}

//  ADD FIVE
	var ear = document.getElementById('ear');
	ear.addEventListener("click", listener, false);

	function listener() {
	document.getElementById('divFive').innerHTML = 
	"....  There's a lady who's sure ... All that glitters is gold ... And she's buying a stairway to heaven</br>";
	}