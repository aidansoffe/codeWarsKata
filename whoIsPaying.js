function whoIsPaying(name){
  var result = []
  var newAr= ''
  if (name.length<=2){
    return [name]
  }else{
  result.push(name, name.slice(0, 2))  
}
  return result
}

///////////////////////////////

function whoIsPaying(name){
  return (name.length>2)?([name, name.substr(0,2)]):[name];
}

//////////////////////////////

https://www.codewars.com/kata/who-is-going-to-pay-for-the-wall/train/javascript
