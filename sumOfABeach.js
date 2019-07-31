function sumOfABeach(beach) {
  beach=beach.toLowerCase()
  let res = beach.match(/sand|fish|sun|water/g)
  if(res){
  return res.length
  }else{
  return 0
  }
  }
  
 //////////////////////////
 
 
 const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length
 
 /////////////////////////
 
 
 https://www.codewars.com/kata/sum-of-a-beach/train/javascript
