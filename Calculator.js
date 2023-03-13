let opType = prompt("What kind of operation?");
if (opType == "n") {
  let num1 = prompt("What is the first number?");
  let op = prompt("What is the operator?");
  if (numofnums == 2) {
    let num2 = prompt("What is the second number?");
    if (op == "+") {alert(num1 + " + " + num2 + " = " + (+num1 + +num2));}
    else if (op == "-") {alert(num1 + " - " + num2 + " = " + (+num1 - +num2));}
    else if (op == "*") {alert(num1 + " * " + num2 + " = " + (+num1 * +num2));}
    else if (op == "/") {
      let form = prompt("Remainder or decimal form? R/D");
      if (form == "R") {alert(num1 + "/" + num2 + " = " + Math.floor(+num1 / +num2) + "R" + (+num1 % +num2));}
      else if (form == "D") {alert(num1 + " / " + num2 + " = " + (+num1 / +num2));}
      else {alert("format error");} 
    }
    else if (op == "%") {alert(num1 + "% of " + num2 + " = " + (+num1 * +num2 / 100));}
    else if (op == "^") {alert(num1 + "^" + num2 + " = " + Math.pow(+num1 * +num2));}
    else if (op == "R") {alert(num1 + " rounded to the nearest " + +num2 + " is " + Math.round(+num1/+num2)*+num2);}
    else {alert("operation error");}
  } else {
    if (op == "++") {alert(num1 + "++ = " + +num1+1);}
    else if (op == "--") {alert(num1 + "-- = " + +num1-1);}
    else if (op == "%") {alert(num1 + "% = " + +num1/100);}
    else if (op == "*2") {alert(num1 + "*2 = " + +num1*2);}
    else if (op == "*3") {alert(num1 + "*3 = " + +num1*3);}
    else if (op == "/2") {
      let form = prompt("Remainder or decimal form? R/D");
      if (form == "R") {alert(num1 + "/2 = " + Math.floor(+num1/2) + "R" + (+num1%2));}
      else if (form == "D") {alert(num1 + "/2 = " + +num1/2);}
      else {alert("format error");} 
    }
    else if (op == "^2") {alert(num1 + "^2 = " + Math.pow(+num1,2));}
    else if (op == "^3") {alert(num1 + "^3 = " + Math.pow(+num1,3));}
    else if (op == "\/") {alert("The floor of " + num1 + " = " + Math.floor(+num1));}
    else if (op == "/\\") {alert("The ceiling of " + num1 + " = " + Math.ceil(+num1));}
    else if (op == "R") {alert(num1 + " rounded to the nearest integer is " + Math.round(+num1));}
    else {alert("operation error");}
  }
} else if (opType == "p") {
  let a = prompt("What is the x term coefficient?");
  let b = prompt("What is the constant?");
  if (b == "0") {if (a == "0") {alert("x = ℝ");} else {alert("x = ∅");}} else {alert("x = " + (- +b/+a));}
} else {alert("operation type error");}
