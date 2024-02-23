let num1 = 2;
let num2 = 4;
let operator = 'multiply';

function add(num1, num2) {
   return num1 + num2;
}
function subtract(num1, num2) {
   return num1 - num2;
}
function multiply(num1, num2) {
   return num1 * num2;
}
function divide(num1, num2) {
   if (num2 === 0) { 
      return "Infinite ∞";
   }
   else {
      return num1 / num2;
   }
}
console.log(divide(num1, num2));

function operate(num1, num2, operator){
   if (operator === 'add'){
      return add(num1, num2);
   } else if (operator === 'subtract'){
      return subtract(num1, num2);
   } else if (operator === 'multiply'){
      return multiply(num1, num2);
   } else if (operator === 'divide'){
      return divide(num1, num2);
   }
   
};

const buttonClear = document.querySelector("#Clear");
const buttonSum = document.querySelector("#sum");
const buttonRest = document.querySelector("#rest");
const buttonMult = document.querySelector("#mult");
const buttonDiv = document.querySelector("#div");
const buttonIgual = document.querySelector("#igual");

// Input Numeros
const buttons = document.querySelectorAll('#numbers button');
buttons.forEach((button) => {
   button.addEventListener('click', () => {
      displayNumbers(button.value)
   });
});

function displayNumbers(numero) {
   document.getElementById("pantalla").value += numero;
   
 }

 // operadores

buttonClear.addEventListener('click', () => {
   document.getElementById("pantalla").value = "";
});

buttonSum.addEventListener('click', () => {
   num1 = parseFloat(document.getElementById("pantalla").value);
   document.getElementById("pantalla").value = "";
   operator = 'add';
});

buttonRest.addEventListener('click', () => {
   num1 = parseFloat(document.getElementById("pantalla").value);
   document.getElementById("pantalla").value = "";
   operator = 'subtract';
});

buttonMult.addEventListener('click', () => {
   num1 = parseFloat(document.getElementById("pantalla").value);
   document.getElementById("pantalla").value = "";
   operator = 'multiply';
});

buttonDiv.addEventListener('click', () => {
   num1 = parseFloat(document.getElementById("pantalla").value);
   document.getElementById("pantalla").value = "";
   operator = 'divide';
});

buttonIgual.addEventListener('click', () => {
   num2 = parseInt(document.getElementById("pantalla").value);
   document.getElementById("pantalla").value = operate(num1, num2, operator);
   
});

