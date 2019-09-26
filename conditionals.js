/*
const raining = true;
const cold = true;
// Initial Conditional example checks if it's raining if not does nothing
if (raining) {
  console.log("Don't forget your umbrella!");
}
//checks if it's cold if not does nothing
if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

const cold = false;

// if cold do this otherwise do that
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}


const temperature = 20;
//temperature what to wear conditionals
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

//comparing multiple conditions in an if statement so both are true
const isCitizen = true;
const age = 19;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//comparing multiple conditions where either can be true
let temperature = 50;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}


//if something is the oposite of the given value or not that value perform this task
 let raining = false;
 if (!raining) {
  console.log("Leave your umbrella at home!");
}
