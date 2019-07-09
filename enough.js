function enough(cap, on, wait) {
 
let notEnoughSpace = (on + wait) - cap  
 
 if(notEnoughSpace > 0){
 return notEnoughSpace;
 }else{
 return 0
 }
 }


///////////////////////////


function enough(cap, on, wait) {
  if (on + wait <= cap) {
  return 0;
  } else {
  return (on+wait)-cap
  }
}




https://www.codewars.com/kata/will-there-be-enough-space/train/javascript
