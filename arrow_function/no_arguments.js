const name = "darsh";

// standard function syntax
function sayName() {
  const message = "My name is " + name;
  console.log(message);
}

sayName()

function sayBye() {
  console.log("Bye " + name);
}



// new concise arrow function syntax
const sayName = () => {
  const message = "My name is " + name;
  console.log(message);
}

const sayBye = () => console.log("Bye " + name);
}
