var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var result = document.getElementById("result");
var pastFirstNumber = [];
var pastOperator = [];
var pastSecondNumber = [];
var pastCalculations = [];

//larry was here

function calculate(){
		var firstNumber = document.getElementById("var1").value;
        var secondNumber = document.getElementById("var2").value;
	
	//Error checking
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		 alert("Please enter numbers only");
	     return;
		}
 
	var temp = this.id // button id of .addEventListener
	var operator = "";
	switch (temp){
		case "multiply":
			finalResult = firstNumber * secondNumber;
			operator = "*"
		break;
		case "divide":
			finalResult = firstNumber / secondNumber;
			operator = "/"
			break;
		case "add":
			finalResult = +firstNumber + +secondNumber;
			operator = "+"
			break;
		case "subtract":
			finalResult = firstNumber - secondNumber;
			operator = "-"
		break;
	}
pastFirstNumber.push(firstNumber);
pastOperator.push(operator);	 
pastSecondNumber.push(secondNumber);
pastCalculations.push(finalResult);
  function pastCalculation(){
	 /* Remove the first element */ 	
	 if (pastFirstNumber.length >= 11) { 
		var past = document.getElementById("past");
		past.removeChild(past.firstChild);

	}  
	var element = document.createElement("div");
	//element.id="a";
	document.getElementById("past").appendChild(element);
	element.innerHTML = pastFirstNumber[pastFirstNumber.length-1] + pastOperator[pastOperator.length-1] + pastSecondNumber[pastSecondNumber.length-1] + " = "+ pastCalculations[pastCalculations.length-1];
} 
pastCalculation();
return document.getElementById("result").innerHTML = finalResult;

}
 
multiply.addEventListener("click", calculate);
divide.addEventListener("click", calculate);
add.addEventListener("click", calculate);
subtract.addEventListener("click", calculate);


