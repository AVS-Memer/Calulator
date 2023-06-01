let opType = prompt("What kind of operation? (n / p / t)")
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
    else if (calc == "s") {alert("The slope is " + a);}
    else if (calc == "y") {alert("The y intercept is" + b);} else {alert("calculation error");}
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
      } else if (calc == "v") 
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
if (opType == "t") {
  let triType = prompt("What should it do? (c / f)");
  if (triType == "c") {
    let class = prompt("How should it classify the triangle? (a / s / b)");
    if (class == "a" || class == "b") {
      let aClass = null;
      let a1 = prompt("What is the first angle?");
      if (a1 > 0 && a1 < 180) {
        let a2 = prompt("What is the second angle?");
        if (a2 > 0 && a1+a2 < 180) {
          let a3 = prompt("What is the third angle? (Leave blank to autofill)");
          if (a3 == null || a1+a2+a3 == 180) {
            a3 = 180-a1-a2;
            if (a1 > 90 || a2 > 90 || a3 > 90) {
              if (class == "a") {
                alert("This is an obtuse triangle");
              } else {
                aClass = "obtuse";
              }
            } else if (a1 == 90 || a2 == 90 || a3 == 90) {
              if (class == "a") {
                alert("This is a right triangle");
              } else {
                aClass = "right";
              }
            } else {
              if (class == "a") {
                alert("This is an acute triangle");
              } else {
                aClass = "acute";
              }
            }
          } else {
            alert("Angle error");
          }
        } else {
          alert("Angle error");
        }
      } else {
        alert("Angle error");
      }
    }
    if (class == "s" || class == "b") {
      let sClass = null;
      let s1 = prompt("What is the first leg?");
      if (s1 > 0) {
        let s2 = prompt("What is the second leg?");
        if (s2 > 0) {
          let s3 = prompt("What is the hypotenuse?");
          if (s1+s2 > s3 && s3 > s1 && s3 > s2) {
            if (s1 == s2 == s3) {
              alert("This is an equilateral triangle");
            } else if (s1 == s2 || s1 == s3 || s2 == s3) {
              if (class == "s") {
                alert("This is an isosceles triangle");
              } else {
                sClass = "isosceles";
              }
            } else {
              if (class == "s") {
                alert("This is a scalene triangle");
              } else {
                sClass = "scalene";
              }
            }
          } else {
            alert("Side error");
          }
        } else {
          alert("Side error");
        }
      } else {
        alert("Side error");
      }
    }
    if (class == "b") {
      if (sClass == "scalene") {
        alert("This is a scalene " + aClass + " triangle");
      } else if (sClass == "isosceles") {
        alert("This is an isosceles " + aClass + "triangle");
      }
    }
  } else if (triType == "f") {
    let func = prompt("Which trigonometric function?");
    let num = prompt("What is the number?");
    if (func == "sin" || func == "sine") {
      alert("The sine of " + num + " is " + Math.sin(num*Math.PI/180));
    } else if (func == "cos" || func == "cosine") {
      alert("The cosine of " + num + " is " + Math.cos(num*Math.PI/180));
    } else if (func == "tan" || func == "tangent") {
      alert("The tangent of " + num + " is " + Math.tan(num*Math.PI/180));
    } else if (func == "sec" || func == "secant") {
      alert("The secant of " + num + " is " + Math.sec(num*Math.PI/180));
    } else if (func == "csc" || func == "cosecant") {
      alert("The cosecant of " + num + " is " + Math.csc(num*Math.PI/180));
    } else if (func == "cot" || func == "cotangent") {
      alert("The cotangent of " + num + " is " + Math.cot(num*Math.PI/180));
    } else if (func == "arcsin" || func == "inverse sine") {
      alert("The the inverse sine of " + num + " is " + Math.asin(num*Math.PI/180));
    } else if (func == "arccos" || func == "inverse cosine") {
      alert("The inverse cosine of " + num + " is " + Math.acos(num*Math.PI/180));
    } else if (func == "arctan" || func == "inverse tangent") {
      alert("The inverse tangent of " + num + " is " + Math.atan(num*Math.PI/180));
    } else if (func == "arcsec" || func == "inverse secant") {
      alert("The inverse secant of " + num + " is " + Math.asec(num*Math.PI/180));
    } else if (func == "arccsc" || func == "inverse cosecant") {
      alert("The inverse cosecant of " + num + " is " + Math.acsc(num*Math.PI/180));
    } else if (func == "arccot" || func == "inverse cotangent") {
      alert("The inverse cotangent of " + num + " is " + Math.acot(num*Math.PI/180));
    } else {
      alert("Function error");
    }
  }
} else {alert("operation type error");}
