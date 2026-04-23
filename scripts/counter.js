let number = 0;
let addonebutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
let delbutton = document.getElementById("clear-button");
let minusbutton = document.getElementById("minus-button");
let Zerobutton = document.getElementById("zero-button");
let Onebutton = document.getElementById("one-button");
let Twobutton = document.getElementById("two-button");
let Threebutton = document.getElementById("three-button");
let Fourbutton = document.getElementById("four-button");
let Fivebutton = document.getElementById("five-button");
let Sixbutton = document.getElementById("six-button");
let Sevenbutton = document.getElementById("seven-button");
let Eightbutton = document.getElementById("eight-button");
let Ninebutton = document.getElementById("nine-button");
let Tenbutton = document.getElementById("ten-button")



function add1() {
    number = number + 1;
    counter.textContent = number;
}

function clear() {
    number = number + 1;
    counter.textContent = number;
}
function minus() {
    number = number - 1;
    counter.textContent = number;
}
function one() {
    number = 1;
    counter.textContent = number;
}
function two() {
    number = 2;
    counter.textContent = number;
}
function three() {
    number = 3;
    counter.textContent = number;
}
function four() {
    number = 4;
    counter.textContent = number;
}
function five() {
    number = 5;
    counter.textContent = number;
}
function six() {
    number = 6;
    counter.textContent = number;
}
function seven() {
    number = 7;
    counter.textContent = number;
}
function eight() {
    number = 8;
    counter.textContent = number;
}
function nine() {
    number = 9;
    counter.textContent = number;
}

addonebutton.addEventListener("click", clear);
delbutton.addEventListener("click", clear);
minusbutton.addEventListener("click", minus);
Zerobutton.addEventListener("click", one);
Twobutton.addEventListener("click", two);
Threebutton.addEventListener("click", three);
Fourbutton.addEventListener("click", four);
Fivebutton.addEventListener("click", five);
Sixbutton.addEventListener("click", six);
Sevenbutton.addEventListener("click", seven);
Eightbutton.addEventListener("click", eight);
Ninebutton.addEventListener("click", nine);