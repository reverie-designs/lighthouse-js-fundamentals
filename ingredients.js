const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];



// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for(b = 0; b < ingredients.length; b++){
  console.log(ingredients[b]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
ingredients.reverse();
let d = 0;
while(d<ingredients.length){
 // ingredients.reverse();
  console.log(ingredients[d]);
  //console.log(ingredients[d].reverse());
  d++;
}

/*
for(i = 0; i < ingredients.length; i++){
  ingredients.reverse();
  console.log(ingredients[i]);
}*/
