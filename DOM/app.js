const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const list = document.querySelectorAll('li');
const odd = document.querySelectorAll('li:nth-child(odd)');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

for (let i = 0; i < list.length; i++) {
list[i].style.color = 'purple'
}

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'lightgrey';
}
