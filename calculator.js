function calculator(a,b,sign){
 if(sign === '+'){
 return a+b
 }else if(sign === '-'){
 return a-b
 }else if(sign === '/'){
 return a/b
 }else if(sign === '*'){
 return a*b
 }else if(isNaN(a) || isNaN (b)){
 return "unknown value"
 }else{
 return "unknown value"
 }
}

////////////////

function calculator(a,b,sign){
  if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}
