function noBoringZeros(n) {
let remove = true;
let reversed = ""
  var str = n.toString()
     for (var i = str.length - 1; i >= 0; i--){
       if(str[i] === '0' && remove){
         reversed += '';
       } else {
         remove = false
        reversed += str[i]; 
      }
   }
   reversed = reversed.split('').reverse().join('')
  return +reversed
}

////////////////////////////

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

////////////////////////////////

https://www.codewars.com/kata/no-zeros-for-heros/train/javascript
