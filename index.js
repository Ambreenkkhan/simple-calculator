var firstNumberInput = document.getElementById("firstNumber");
var secondNumberInput = document.getElementById("secondNumber");
var operatorSelect = document.getElementById("operator");
var answerDisplay = document.getElementById("answer");
function calculate() {

    var firstNumber = parseFloat(firstNumberInput.value);
    var secondNumber = parseFloat(secondNumberInput.value);
    var operator = operatorSelect.value;
    var result = 0;
   
    switch (operator) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            if (secondNumber === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            alert("Invalid operator");
            return;
    }
   
    answerDisplay.textContent = result.toString();
}

window.calculate = calculate;
