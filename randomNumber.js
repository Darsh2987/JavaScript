var input1 = prompt("type a number");
var firstNum = parseInt(input1);

var input2 = prompt("type another number higher then the first")
var secondNum = parseInt(input2);

var randomNum = Math.floor(Math.random() * (firstNum - secondNum + 1)) + secondNum;

var message = randomNum + " is a number bewteen " + firstNum + " and " + secondNum;

document.write(message);




var randomNumber = Math.floor(Math.random() * 6 ) + 1 ;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber) {
  document.write('<p>you guessed the number... congrats</p>');
} else {
  document.write('<p>sorry, the number was ' + randomNumber + '</p>');
}
