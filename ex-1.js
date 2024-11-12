function fizzBuzz(n) {
  const arr = []
  for(let i = 1; i <= n; i++ ){
      if(i % 3 === 0 && i % 5 === 0){
        arr.push("FizzBuzz")
      }else if(i % 3 === 0){
        arr.push("Fizz")
      }else if(i % 5 === 0){
        arr.push("Buzz")
      }
      else{
        arr.push(i)
      }
    }
    return arr
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

let result4 = fizzBuzz(30);
console.log(result4);