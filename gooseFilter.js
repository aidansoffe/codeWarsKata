function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  var r = []
  for (var i=0; i<birds.length; i++){
    if(!geese.includes(birds[i])){
      r.push(birds[i])
    }
  } 
  
  return r;
};


/////////////////

https://www.codewars.com/kata/filter-out-the-geese/train/javascript
