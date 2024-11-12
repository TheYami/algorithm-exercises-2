function countPositivesSumNegatives(input) {
  const arr = [];
  let positiveNumberCount = 0;
  let negativeNumber = 0
  if(input == []){
    return arr
  }else{
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        positiveNumberCount++;
      }else{
        negativeNumber += input[i]
      }
    }
    arr.push(positiveNumberCount)
    arr.push(negativeNumber)
  }
  return arr
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
