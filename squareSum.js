function squareSum(array){
 var sum = 0
     for (let i of array){
     sum += i*i
     }
  return sum;
}

//////////////////////////

function squareSum(array){
 var sum = 0 
     for(var i=0; i<array.length;i++){
   sum += Math.pow(array[i], 2);
   }
  return sum;
}

//////////////////////////////

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

///////////////////////////////


https://www.codewars.com/kata/square-n-sum/train/javascript

