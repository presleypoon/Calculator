const Btn1 = document.getElementById("btn-1");
const Btn2 = document.getElementById("btn-2");
const Btn3 = document.getElementById("btn-3");
const Btn4 = document.getElementById("btn-4");
const Btn5 = document.getElementById("btn-5");
const Btn6 = document.getElementById("btn-6");
const Btn7 = document.getElementById("btn-7");
const Btn8 = document.getElementById("btn-8");
const Btn9 = document.getElementById("btn-9");
const Btn0 = document.getElementById("btn-0");
const BtnAdd = document.getElementById("btn-add");
const BtnSubtract = document.getElementById("btn-subtract");
const BtnMultiply = document.getElementById("btn-multiply");
const BtnDivide = document.getElementById("btn-divide");
const BtnDecimal = document.getElementById("btn-dot");
const BtnEquals = document.getElementById("btn-equals");
const BtnClear = document.getElementById("btn-clear");
const BtnLBracket = document.getElementById("btn-lbracket");
const BtnRBracket = document.getElementById("btn-rbracket");
const Display = document.getElementById("display");
let Input = "";
let Output = "";

addEventListener("click", function (event) {
	if (event.target === Btn1) {
		Input += "1";
	} else if (event.target === Btn2) {
		Input += "2";
	} else if (event.target === Btn3) {
		Input += "3";
	} else if (event.target === Btn4) {
		Input += "4";
	} else if (event.target === Btn5) {
		Input += "5";
	} else if (event.target === Btn6) {
		Input += "6";
	} else if (event.target === Btn7) {
		Input += "7";
	} else if (event.target === Btn8) {
		Input += "8";
	} else if (event.target === Btn9) {
		Input += "9";
	} else if (event.target === Btn0) {
		Input += "0";
	} else if (event.target === BtnAdd) {
		Input += "+";
	} else if (event.target === BtnSubtract) {
		Input += "-";
	} else if (event.target === BtnMultiply) {
		Input += "*";
	} else if (event.target === BtnDivide) {
		Input += "/";
	} else if (event.target === BtnDecimal) {
		Input += ".";
	} else if (event.target === BtnClear) {
		Input = "";
		Output = "";
	} else if (event.target === BtnLBracket) {
		Input += "(";
	} else if (event.target === BtnRBracket) {
		Input += ")";
	}
	Display.textContent = Input;
	if (event.target === BtnEquals) {
		Output = eval(Input);
		Display.textContent = "=" + Output;
		Input = "";
	}
});