
function randomNumber(lower, upper) {

  if (isNaN(lower) || isNaN(upper)) {
    throw new Error('invalid numbers');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(randomNumber(30, 60));
console.log(randomNumber(1, 10));
console.log(randomNumber('ten', 100));
console.log(randomNumber(100, 1000));
console.log(randomNumber(20, 30));
