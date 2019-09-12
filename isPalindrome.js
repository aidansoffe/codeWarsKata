function isPalindrome(str) {
str=str.toLowerCase()
 var i =  str.split('').reverse().join('');
  if(i === str){
  return true
  }else{
  return false
  }
}

//////////////

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}
