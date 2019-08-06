function twoSort(s) {
  var k = []
  var basket =  s.sort();
  basket = basket[0];
  console.log(basket)

for(var i=0; i<basket.length; i++) {
  k.push(basket[i] + '***')
}
console.log('res: ', k)
    k = k.join('');
    return k.slice(0, -3)
}

/////////////

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

////////////

function twoSort(s) {
  s.sort();
  return s[0].split('').join('***');
}

