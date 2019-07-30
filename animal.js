function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

///////////////////////////

function animal(obj){
  const {color,name,legs} = obj;
  return `This ${color} ${name} has ${legs} legs.`
}

/////////////////////////


https://www.codewars.com/kata/training-js-number-5-basic-data-types-object/train/javascript
