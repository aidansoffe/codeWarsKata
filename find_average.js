function find_average(array) {
var sum = array.reduce((a,b)=> a+b,0);
return sum/array.length
}


///////////////


function find_average(array) {
  return array.reduce((result, current) => result + current, 0) / array.length;
 } 
  
  ///////////////////
  
  
https://www.codewars.com/kata/calculate-average/train/javascript
