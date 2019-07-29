function feast(beast, dish) {
var one = beast.slice(0, 1)
var two = beast.slice(-1)
var three = dish.slice(0, 1)
var four = dish.slice(-1);

return (one === three && two === four);
}

//////////////////////////

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
////////////////////////////


https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript
