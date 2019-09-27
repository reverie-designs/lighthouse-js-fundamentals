
for(x=100; x<=200; x++){ //increment x by one until it reaches 200 inclusive
  if(x%3 === 0 && x%4 === 0){ // print msg if x divisible by both 4 and 3
    console.log('LoopyLighthouse');
  } else if (x%3 === 0 ){ // print msg if x is divisible by 3
    console.log('Loopy');
  } else if (x%4 === 0){ // print msg if x is divisble by 4
    console.log('Lighthouse');
  } else { // print x in all other instances
    console.log(x);
  }
}