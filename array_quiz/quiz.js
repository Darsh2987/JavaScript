var questions = [
  ["what color is the sky?", "blue"],
  ["what color is grass?", "green"],
  ["what color is the sun?", "yellow"]
];

var correctQuestion = [];
var wrongQuestion = [];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var report;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question.toLowerCase());

  if (response === answer) {
    correctAnswers += 1
    correctQuestion.push(question);
  } else {
    wrongQuestion.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) correct.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctQuestion);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrongQuestion);
print(html);
