let num1;
let num2;
let operator;
let pantalla = "";

const operate = (operator, num1, num2) => {
  if (operator === "-") {
    result = num1 - num2;
    return result;
  } else if (operator === "+") {
    result = num1 + num2;
    return result;
  } else if (operator === "x") {
    result = num1 * num2;
    return result;
  } else if (operator === "/") {
    result = num1 / num2;
    return result;
  } else {
    alert("Wrong data");
  }
};

const divButtons = document.querySelectorAll(".buttons > div");
const screenNumbers = document.querySelector("#screenNumbers");
const opButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector("#reset");

divButtons.forEach((div) => {
  div.addEventListener("click", () => {
    const divValue = div.textContent;

    if (!operator) {
      num1 = divValue;
    } else {
      num2 = divValue;
    }

    pantalla += divValue;

    screenNumbers.textContent = pantalla;
  });
});

opButtons.forEach((opDiv) => {
  opDiv.addEventListener("click", () => {
    const opValue = opDiv.textContent;
    operator = opValue;
    pantalla += opValue;
    screenNumbers.textContent = pantalla;
  });
});

equal.addEventListener("click", () => {
  if (num1 && num2 && operator) {
    const finalResult = operate(operator, parseFloat(num1), parseFloat(num2));
    pantalla = finalResult.toString();
    num1 = finalResult.toString();
    num2 = "";
    operator = "";

    screenNumbers.textContent = pantalla;
  }
});

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  pantalla = "";
  screenNumbers.textContent = pantalla;
});
