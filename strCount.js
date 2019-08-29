function strCount(str, letter){  
var k = ''
for (var i=0; i<str.length; i++){
if(str[i] === letter){
k += letter
}
}
return k.length
}
