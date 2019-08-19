function correctTail(bod, tail){
  
 var sub = bod.substr(bod.length-tail.length);
  
  if (sub === tail) {
    return true
  }
  else {
    return false
  }
}


/////////

function correctTail(bod, tail) {
  return bod[bod.length-1] === tail
}
