
/* //while loop chorus example
const chorus = "Let's dance!";
let repeat = 0;

while (repeat < 10) {
  console.log(chorus);
  repeat++;
  console.log("Until the sun comes up!");  // moved line to see execution
}
*/

//Adding an if statement with a strict condition in order to insert key change notation in the chorus
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

