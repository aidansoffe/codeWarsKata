function sumMix(x){
const sum = []
for (var i=0; i<x.length; i++){
  sum.push(parseInt(x[i]))
}
return sum.reduce((a, b) => a + b, 0)
  }
  
  ////////////////
  
  https://www.codewars.com/kata/sum-mixed-array/train/javascript
