function sumStr(a,b) {
var k = +a + +b
return k.toString()
}


///////// opt 2

function sumStr(a,b) {
  return String(Number(a)+Number(b));
}

///////// opt 3

function sumStr(a,b) {
  return (+a+ +b)+''  
}

//////////
