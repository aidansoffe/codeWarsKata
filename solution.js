function solution(str){
  var newStr = ""
  for (var i=str.length-1; i>=0; i--){
  newStr+= str[i]
  }
  return newStr
}

//////////////////////////////

function solution(str){
  return str.split('').reverse().join('');  
}

//////////////////////////////

https://www.codewars.com/kata/reversed-strings/train/javascript
