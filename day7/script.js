const num1Input=document.getElementById("userNumber1");
const num2Input = document.getElementById("userNumber2");
const resultText = document.getElementById("result");

function calculate (operation){

  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  if (num1 === "" || num2 === "") {
    alert("Please enter both numbers!");
    return;
  }

 let result;

  if (operation === "add") result = num1 + num2;
  if (operation === "sub") result = num1 - num2;
  if (operation === "mul") result = num1 * num2;
  if (operation === "div") {
    if (num2 === 0) {
      alert("Division by zero is not allowed!");
      return;
    }
    result = num1 / num2;
  }

  resultText.textContent = result;
}


