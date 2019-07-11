function combat(health, damage) {
   let newHealth = health-damage;
 if(newHealth <= 0){
   return 0;
 }else{
 return newHealth;
 }
}

////////////////////////////////

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

/////////////////////////////////

https://www.codewars.com/kata/grasshopper-terminal-game-combat-function-1/train/javascript
