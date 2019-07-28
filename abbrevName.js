function abbrevName(name){
  var first = ''
  var last = ' '
var temp = name.split(' ')
first = temp[0].slice(0,1).toUpperCase()
last = temp[1].slice(0,1).toUpperCase()
return `${first}.${last}`

}

///////////////////////////

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

///////////////////////////

https://www.codewaars.com/kata/abbreviate-a-two-word-name/train/javascript
