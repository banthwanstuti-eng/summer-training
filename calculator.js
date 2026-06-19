let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function calculateLog() {
    let value = parseFloat(display.value);

    if (value > 0) {
        display.value = Math.log10(value);
    } else {
        display.value = "Error";
    }
}
function calculateSqrt() {
    display.value = Math.sqrt(display.value);
}

function calculateSquare() {
    display.value = display.value * display.value;
}

