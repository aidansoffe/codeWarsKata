function isDivisible(n, x, y) {
if(n %x === 0 && n %y === 0){
return true
}else{
return false
}
}

///////////////////////////

function isDivisible(n, x, y) {
  return !(n%x||n%y)
}

//////////////////////////

https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript
