function getSize(w,h,d){
var volume = []
var area = []
if(w&&h&&d){
volume.push(w*h*d)
}if(volume){
area.push(6*d*d)
}
var both= area.concat(volume)
return both
}


////////////////////

https://www.codewars.com/kata/surface-area-and-volume-of-a-box/train/javascript
