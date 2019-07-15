var cubeChecker = function(volume, side){
return volume===side*side*side &&volume>0

};


/////////////////////////////

var cubeChecker = function(volume, side){
  if (side<=0 || volume<=0){
    return false;
  }else if(Math.pow(side,3)!==volume){
    return false;
  }else{
    return true;
  }
};

//////////////////////////////

cubeChecker = (v,s) => s > 0 && v === Math.pow(s, 3)

//////////////////////////////

https://www.codewars.com/kata/find-out-whether-the-shape-is-a-cube/train/javascript
