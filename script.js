let display = document.getElementById("calc-upper");

function addToDisplay(value){
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
}

function clearDisplay() {
    display.textContent = '0';
}

function calcResult() {
      display.textContent = eval(display.textContent);
}
