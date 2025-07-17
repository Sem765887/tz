let display = document.getElementById("display");

function appendNumber(number) {
    if (display.value === "0" && number !== ".") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function changeSign() {
    try {
        const result = eval(display.value) * -1;
        display.value = result;
    } catch (e) {
        display.value = "Ошибка";
    }
}

function calculate() {
    try {
        const result = eval(display.value.replace(/[^-()\d/*+.]/g, ""));
        display.value = parseFloat(result.toFixed(10)).toString();
    } catch (e) {
        display.value = "Ошибка";
    }
}