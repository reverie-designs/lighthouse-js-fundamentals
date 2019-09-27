// initial function to set an automated greeting
const sayHello  = function () {
  console.log("Hello, puppers and kittens of planet earth!");
}

sayHello();

// secondary example with parameter

const sayHelloAgain  = function (name) {
  console.log("Hello dear, " + name);
}
sayHelloAgain('Dasha');
sayHelloAgain('people that are viewing this file.');

//Examples of printing to console vs returning a value

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

// return - stores the value in untill needed
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('Sandra');
console.log(greeting);