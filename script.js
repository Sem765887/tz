let display = document.getElementById("display");

function appendNumber(number) {
    if (display.value === "0" && number !== ".") {
        display.value = number;
    } else {
        display.value += number;
    }
}