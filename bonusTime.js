function bonusTime(salary, bonus) {
if(bonus){
return '£'+salary*10
}else{
return '£'+ salary
}
}

/////////////////

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}

///////////////////


https://www.codewars.com/kata/do-i-get-a-bonus/train/javascript
