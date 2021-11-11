const isArmstrongNumber = function(number){  
  let numOfDigits = number.length;
  let sum = 0;  
  for(let i = 0; i < numOfDigits; i++){
    sum += Math.pow(number.charAt(i), numOfDigits);
   }
  return sum == number ? true : false;
}
console.log(isArmstrongNumber("153"));
console.log(isArmstrongNumber("1532"));
console.log(isArmstrongNumber("1634"));
