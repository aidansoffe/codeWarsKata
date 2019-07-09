function divisibleBy(numbers, divisor){
var devided = [];
for (var i=0; i<numbers.length; i++){
if(numbers[i] % divisor === 0){
devided.push(numbers[i])
}
}
return devided
}

//////////////////////////////

function divisibleBy(numbers, divisor){
  return numbers.filter(function(number){
    return number % divisor === 0;
  })
}

//////////////////////////////

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}
