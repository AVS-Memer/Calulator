let opType = prompt("What kind of operation? (n / p)");
if (opType == "n") {
  let numofnums = prompt("How many numbers?");
  let num1 = prompt("What is the first number?");
  let op = prompt("What is the operator?");
  if (numofnums == "2") {
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
    else if (op == "R") {alert(num1 + " rounded to the nearest " + num2 + " is " + Math.round(+num1/+num2)*+num2);}
    else if (op == "GCF") {alert(`The GCF of ${num1} and ${num2} is ${Math.GCF(+num1,+num2)}`);}
    else if (op == "LCM") {alert(`The LCM of ${num1} and ${num2} is ${Math.LCM(+num1,+num2)}`);}
    else {alert("operation error");}
  } else if (numofnums == "1") {
    if (op == "++") {alert(num1 + "++ = " + +num1+1);}
    else if (op == "--") {alert(num1 + "-- = " + +num1-1);}
    else if (op == "%") {alert(num1 + "% = " + +num1/100);}
    else if (op == "*2") {alert(num1 + "*2 = " + +num1*2);}
    else if (op == "*3") {alert(num1 + "*3 = " + +num1*3);}
    else if (op == "/2") {
      let form = prompt("Remainder or decimal form? R/D");
      if (form == "R") {alert(num1 + "/2 = " + Math.floor(+num1/2) + "R" + +num1%2);}
      else if (form == "D") {alert(num1 + "/2 = " + +num1/2);}
      else {alert("format error");} 
    }
    else if (op == "^2") {alert(num1 + "^2 = " + Math.pow(+num1,2));}
    else if (op == "^3") {alert(num1 + "^3 = " + Math.pow(+num1,3));}
    else if (op == "\\/") {alert("The floor of " + num1 + " = " + Math.floor(+num1));}
    else if (op == "/\\") {alert("The ceiling of " + num1 + " = " + Math.ceil(+num1));}
    else if (op == "R") {alert(num1 + " rounded to the nearest integer is " + Math.round(+num1));}
    else {alert("operation error");}
  }
} else if (opType == "p") {
  let degree = prompt("Linear or quadratic? (l / q)");
  if (degree == "l") {
    let calc = prompt("What should be calculated? (s / x / y)");
    let a = prompt("What is the x term coefficient?");
    let b = prompt("What is the constant?");
    if (calc == "x") {if (b == "0") {if (a == "0") {alert("x = ℝ");} else {alert("x = ∅");}} else {alert("x = " + (- +b/+a));}}
    else if (calc == "s") {alert(a);}
    else if (calc == "y") {alert(b);} else {alert("calculation error");}
  } else if (degree == "q") {
    let calc = prompt("What should be calculated? (a / m / v / x / y)");
    let a = prompt("What is the x² term coefficient?");
    if (a == "0") {alert("degree error");} else {
      let b = prompt("What is the x term coefficient?");
      let c = prompt("What is the constant?");
      if (calc == "a") {
        alert("The axis of symmetry is x = " + +b/-2*+a);
      } else if (calc == "m") {
        if (a > 0) {alert("The minimum is " + (+a*Math.pow(+b,2)/-2*Math.pow(+a,2) + Math.pow(+b,2)/-2*+a + +c));} else {alert("The maximum is " + (+a*Math.pow(+b,2)/-2*Math.pow(+a,2) + Math.pow(+b,2)/-2*+a + +c));}
      } else if (calc == "v") {
        alert("The vertex is (" + +b/-2*+a + ", " + (+a*Math.pow(+b,2)/-2*Math.pow(+a,2) + Math.pow(+b,2)/-2*+a + +c) + ")");
      } else if (calc == "x") {
        if (Math.pow(+b,2)-4*+a*+c < 0) {alert("The x intercepts are " + (+b+Math.sqrt(4*+a*+c-Math.pow(+b,2)))/-2*+a + "i, " + (+b-Math.sqrt(4*+a*+c-Math.pow(+b,2)))/-2*+a) + "i";}
        else if (Math.pow(+b,2)-4*+a*+c == 0) {alert("The x intercept is " + (+b+Math.sqrt(Math.pow(+b,2)-4*+a*+c))/-2*+a);}
        else {alert("The x intercepts are " + (+b+Math.sqrt(Math.pow(+b,2)-4*+a*+c))/-2*+a + ", " + (+b-Math.sqrt(Math.pow(+b,2)-4*+a*+c))/-2*+a);}
      } else if (calc == "y") {
        alert("The y intercpt is (0," + c + ")");
      } else {alert("caculation error");}
    }
  } else {alert("degree error");}
} else {alert("operation type error");}
