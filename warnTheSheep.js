function warnTheSheep(queue) {
 let counter = 0;

  for(let i = queue.length-1; i >= 0; i--){
   counter++
  if(queue[queue.length-1] === "wolf"){
    return    "Pls go away and stop eating my sheep"
   }else if( queue[i] === "wolf"){
    return `Oi! Sheep number ${counter -1}! You are about to be eaten by a wolf!`
}
}
}

/////////////////////////

function warnTheSheep(queue) {
  if (queue[queue.length -1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    let n = queue.reverse().indexOf("wolf");
    return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
  }
}

/////////////////////////////

function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" :
  `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`}
  
  ////////////////////////////////

https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
