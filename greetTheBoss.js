function greet (name, owner) {
  if(name === owner){
  return "Hello boss"
  }else{
  return "Hello guest"}
}

//////////

function greet (name, owner) {
  return "Hello " + (name == owner ? "boss" : "guest");
}

//////////

https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
