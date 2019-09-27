function isOdd(num){
  if(num%2===0){ // if the remainder is 0 number is even
    //console.log('Number is even');
    return false;
    
  } else { // otherwise number is odd
    //console.log('Number is odd');
    return true;
    
  }
}

isOdd(9);

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));