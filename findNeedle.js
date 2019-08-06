function findNeedle(h) {
for(var i=0; i<h.length; i++){
  if(h[i] === 'needle'){
  return `found the needle at position ${i}`
  }
}
}

///////////////////

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
