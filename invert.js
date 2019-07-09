function invert(array) {
  let num= [];
 
 for(var i=0; i<array.length; i++){
   num.push(-array[i])
  }
  
   return num;
}


///////////////////////////


function invert(array) {
return array.map(x => x* -1)
}
