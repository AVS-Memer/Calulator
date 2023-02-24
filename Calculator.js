let num1 = prompt("What is the first number?");
let op = prompt("What is the operator?");
let num2 = prompt("What is the second number?");
if (op === "+") {alert(num1 + " + " + num2 + " = " + (+num1 + +num2));}
else if (op === "-") {alert(num1 + " - " + num2 + " = " + (+num1 - +num2));}
else if (op === "*") {alert(num1 + " * " + num2 + " = " + (+num1 * +num2));}
else if (op === "/") {alert(num1 + " / " + num2 + " = " + (+num1 / +num2));}
else {alert("operation error");}
