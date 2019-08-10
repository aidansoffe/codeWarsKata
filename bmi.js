function bmi(w, h) {
  var k = w / (h*h)
  if(k<=18.5){
  return "Underweight"
  }else if(k<=26.0){
  return "Normal"
  }else if(k<= 30.0){
  return "Overweight"
  }else if(k>30){
  return "Obese"
  }
}

///////////

function bmi(weight, height) {
  
var bmi  = weight/(height*height);

 return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}
