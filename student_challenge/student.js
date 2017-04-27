var students = [
  {
  name: "John",
  track:  "Java Development",
  achievements: 12,
  points: 1500
  },

  {
  name: "Dan",
  track:  "Front End Development",
  achievements: 19,
  points: 2376
  },

  {
  name: "Jason",
  track:  "Web Design",
  achievements: 32,
  points: 3000
  },

  {
  name: "Mark",
  track:  "React",
  achievements: 57,
  points: 3682
  },

  {
  name: "Darsh",
  track:  "Full Stack JavaScript",
  achievements: 78,
  points: 6712
  },
];

var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Search student by typeing thier first name or all for all students, type "quit" to end');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name.toLowerCase() === search ) {
      message = getStudentReport( student );
      print(message);
    } else if (search === 'all') {
      for (var i = 0; i < students.length; i += 1) {
        student = students[i];
        message += '<h2>Student: ' + student.name + '</h2>';
        message += '<p>Tracks: ' + student.track + '</p>';
        message += '<p>Achievements: ' + student.achievements + '</p>';
        message += '<p>Points: ' + student.points + '</p>';
        print(message);
      } if (student.indexOf(search) < 1) {
        message += '<h2>Sorry that student is not with our records</h2>';
        print(message);
      }
    }
  }
}
