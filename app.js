var msg = document.getElementById("message");
var num = document.getElementById("number");
var filters = document.getElementById("filter");

function arr() {
    const input = number.value;
    num = input.split(",");
}

function value(text) {
    msg.innerText = text;
}

function sort() {
    arr();
    value("SORT Values: " + num.sort((num1, num2) => num1 - num2));
}

function rev() {
    arr();
    value("REVERSE value: " + num.reverse());
}

function even() {
    arr();
    value("EVEN Numbers: " + num.filter((num1) => num1 % 2 === 0));
}

function odd() {
    arr();
    value("ODD Numbers: " + num.filter((num1) => num1 % 2 != 0));
}

function max() {
    arr();
    value("MAXIMUM Value: " + Math.max(...num));
}

function min() {
    arr();
    value("MINIMUM Value: " + Math.min(...num));
}

function sum() {
    arr();
    const sum = num.reduce((acc, n) => acc + n, 0);
    value("Sum: " + sum);
}