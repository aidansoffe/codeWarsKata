var countSheep = function (num){
  var count = ""
  for(var i=1; i<=num; i++){
    count += i + " sheep..."
  }
  return count
}

/////////////////////////

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
////////////////////////

https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript
