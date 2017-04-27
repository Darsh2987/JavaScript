// Quiz begins with no answers correct
var correct = 0;

// ask the 5 questions
var answer1 = prompt("Name a programming language that's also a gem?");
if (answer1.toUpperCase() === "RUBY") {
  correct += 1;
}

var answer2 = prompt("Name a programming language that's also a snake?");
if (answer2.toUpperCase() === "PYTHON") {
  correct += 1;
}

var answer3 = prompt("what programming language is used to style web page's?");
if (answer3.toUpperCase() === "CSS") {
  correct += 1;
}

var answer4 = prompt("What language is used to build the structure of a web page?");
if (answer4.toUpperCase() === "HTML") {
  correct += 1;
}

var answer5 = prompt("What programming language is used to add interactivity to a web page?");
if (answer5.toUpperCase() === "JAVASCRIPT") {
  correct += 1;
}

// Output the results
document.write("<p>You got " + correct + " out of 5 question correct.</p>");

if (correct === 5) {
  document.write("<p>You earned a gold crown...excellant!</p>");

} else if (correct >= 3) {
  document.write("<p>You earned a silver crown...good job!</p>")

} else if (correct >= 1) {
  document.write("<p>You earned a bronze crown...well done</p>")

} else {
  document.write("<p>No crown for you...better luck next time!</p>")
}
