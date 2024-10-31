
const firstNumberInput = document.getElementById("firstNumber") as HTMLInputElement;
const secondNumberInput = document.getElementById("secondNumber") as HTMLInputElement;
const operatorSelect = document.getElementById("operator") as HTMLSelectElement;
const answerDisplay = document.getElementById("answer") as HTMLSpanElement;

function calculate() {
  
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  const operator = operatorSelect.value;

  let result = 0;

  
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


(window as any).calculate = calculate;
