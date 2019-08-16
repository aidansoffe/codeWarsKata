function getAverage(marks){
  var avr = 0
  for (var i=0; i<marks.length; i++) {
    avr += marks[i] 
    }
   return Math.floor(avr/marks.length)
}

////////////

function getAverage (marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}
