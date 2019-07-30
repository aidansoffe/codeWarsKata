function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

/////////////////////////

function removeEveryOther(arr){
  var r = []
  for (var i=0; i<arr.length; i+=2){
  r.push(arr[i])
  }
  return r
}


