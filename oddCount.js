function oddCount(n){
 
  return Math.floor(n / 2);
}

//////////////////////////////


NOT OPTIMIZED VERSION

function oddCount(n){
 var count = [];
 
 for (var i=1; i<n; i++){
    if(i %2!==0){
      count.push(i)
    
  }
  }
  
  return count.length;
}

https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript
