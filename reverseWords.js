function reverseWords(str){
 let revStr = "";
  str= str.split(" ")
  for(var i=0; i<str.length; i++){
    revStr = str[i] + ' ' + revStr
}
return revStr.slice(0, -1);
}
