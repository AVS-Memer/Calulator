let num1 = prompt("What is the first number?");
let op = prompt("What is the operator?");
let num2 = prompt("What is the second number?");
if (op === "+") {alert(num1 + " + " + num2 + " = " + (+num1 + +num2));}
else if (op === "-") {alert(num1 + " - " + num2 + " = " + (+num1 - +num2));}
else if (op === "*") {alert(num1 + " * " + num2 + " = " + (+num1 * +num2));}
else if (op === "/") {alert(num1 + " / " + num2 + " = " + (+num1 / +num2));}
else if (op === "%") {alert(num1 + "% of " + num2 " = " + (+num1 * +num2 / 100));}
else if (op === "R") {alert(num1 + "/" + num2 + " = " Math.floor(+num1 / +num2) + "R" + (+num1 % +num2));}
else {alert("operation error");}
