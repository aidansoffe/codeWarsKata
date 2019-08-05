function checkExam(a1, a2) {
var r = 0;

 for (var i=0; i<a1.length; i++){
  if(a1[i] === a2[i]){
    r += 4
    }else if(a1[i] !== a2[i]){
    if(a2[i] === ''){
    r += 0
    }else{
    r -= 1
    }
    }
  }
    if( r < 0){
      return 0
  }
      return  r 
}
