
var a = parseInt(prompt("Enter a", 100));
var b = parseInt(prompt("Enter a", 100));
var c = parseInt(prompt("Enter a", 100));

function quadratic(a, b, c) {
var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
return "x1= " + result + " x2= " + result2;
}

document.write(alert( quadratic(a, b, c)));


