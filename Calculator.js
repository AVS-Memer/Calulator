let numofnums = prompt("How many numbers?");
let num1 = prompt("What is the first number?");
let op = prompt("What is the operator?");
if (numofnums == 2) {
  let num2 = prompt("What is the second number?");
  if (op == "+") {alert(num1 + " + " + num2 + " = " + (+num1 + +num2));}
  else if (op == "-") {alert(num1 + " - " + num2 + " = " + (+num1 - +num2));}
  else if (op == "*") {alert(num1 + " * " + num2 + " = " + (+num1 * +num2));}
  else if (op == "/") {alert(num1 + " / " + num2 + " = " + (+num1 / +num2));}
  else if (op == "%") {alert(num1 + "% of " + num2 " = " + (+num1 * +num2 / 100));}
  else if (op == "^") {alert(num1 + "^" + num2 " = " + Math.pow(+num1 * +num2);}
  else if (op == "R") {alert(num1 + "/" + num2 + " = " Math.floor(+num1 / +num2) + "R" + (+num1 % +num2));}
  else {alert("operation error");}
} else {
  if (op == "++") {alert(num1 + "++ = " + num1+1);}
  else if (op == "--") {alert(num1 + "-- = " + num1-1);}
  else if (op == "%") {alert(num1 + "% = " + num1/100);}
  else if (op == "*2") {alert(num1 + "*2 = " num1*2);}
  else if (op == "*3") {alert(num1 + "*3 = " num1*3);}
  else if (op == "/2") {alert(num1 + "/2 = " num1/2);}
  else if (op == "^2") {alert(num1 + "^2 = " Math.pow(num1,2));}
  else if (op == "^3") {alert(num1 + "^3 = " Math.pow(num1,3));}
  else {alert("operation error");}
}
