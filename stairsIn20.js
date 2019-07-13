function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}

///////////////////////////////////////

function stairsIn20(s) {
var sum = 0;
for (var i=0; i<s.length; i++) {
for (var j=0; j<s[i].length; j++){
sum += s[i][j]
}
}
return sum *20
}

///////////////////////////////////////

https://www.codewars.com/kata/how-many-stairs-will-suzuki-climb-in-20-years/train/javascript
