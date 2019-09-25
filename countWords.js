function countWords(str) {
    if(str.length === 0){
        return {}
    }
    var obj = {}
    var arr = str.split(' ')
  for (var i =0; i<arr.length; i++){
      if(arr[i] in obj ){
          obj[arr[i]]++
      }else{
          obj[arr[i]] = 1
      }
  }
  return obj
}

