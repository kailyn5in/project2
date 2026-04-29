//var
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
let Plusbotton=document.getElementById("plus-button");
let Equalbotton=document.getElementById("equ-button");
let SecondNumber=0;



//function

function show() {
    counter.textContent =number;
}
function showanswer(){
     counter.textContent =SecondNumber;
}
function Plus(){
    number=number+"+"+number;
    show(SecondNumber);
}
function add1() {
    number = number + 1;
    show(number);
}
function clear() {
    number = 0;
    show(number);
}
function minus() {
    number = number - 1;
    show(number);
}
function zore() {
    number = number*10+0;
    show(number);
}
function one() {
    number = number*10+1;
    show(number);
}
function two() {
    number = number*10+2;
    show(number);
}
function three() {
    number = number*10+3;
    show(number);
}
function four() {
    number = number*10+4;
    show(number);
}
function five() {
    number = number*10+5;
    show(number);
}
function six() {
    number = number*10+6;
    show(number);
}
function seven() {
    number = number*10+7;
    show(number);
}
function eight() {
    number = number*10+8;
    show(number);
}
function nine() {
    number = number*10+9;
    show(number);
}

//evenlistener
addonebutton.addEventListener("click", add1);
delbutton.addEventListener("click", clear);
minusbutton.addEventListener("click", minus);
Zerobutton.addEventListener("click", zore);
Onebutton.addEventListener("click", one)
Twobutton.addEventListener("click", two);
Threebutton.addEventListener("click", three);
Fourbutton.addEventListener("click", four);
Fivebutton.addEventListener("click", five);
Sixbutton.addEventListener("click", six);
Sevenbutton.addEventListener("click", seven);
Eightbutton.addEventListener("click", eight);
Ninebutton.addEventListener("click", nine);
Plusbutton.addEventListener("click", Plus);
