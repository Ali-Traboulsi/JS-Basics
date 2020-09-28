//define vars
var shoeSize, birthYear;

// define function
function mathOperation(shoeSizing, birthYearing){
    var result = (shoeSizing * 2 + 5 ) * 50 - birthYearing + 1766;
    return result;
}

// show user input
shoeSize = window.prompt("Enter your shoe size: ");
birthYear = window.prompt("Enter your birth year: ");

var answer = mathOperation(shoeSize, birthYear);

window.alert("Your result is: " + answer);

