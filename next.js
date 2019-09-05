function next(xs, item){
  for (var i=0; i<xs.length; i++){
    if(xs[i]===item){
      return xs[i+1]
    }else if(!item){
      return undefined
    }
  }
}


var xs = [1, 2, 3, 4, 5];
var item = 8
next(xs, item)
