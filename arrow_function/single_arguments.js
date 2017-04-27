
// standard function syntax
function square(x) {
  return x * x;
}

function cube(x) {
  return square(x) * x;
}

// new concise arrow function syntax
const square = x => x * x;

const cube = x => square(x) * x; 
