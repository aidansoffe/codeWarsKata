function countPositivesSumNegatives(input) {
var k = []
var l = []
if(input === null || input === undefined || input.length === 0 ){
return []
}
for (var i=0; i<input.length; i++){
if(input[i] > 0){
 k.push(input[i])
}
  else if(input[i]<0){
  l.push(input[i])
  }
  }
return [k.length, l.reduce(function(a, b) {
  return a+b;
}, 0)]
}
  
  //////////////
  
  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
