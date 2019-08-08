function mergeArrays(a, b) {
     let arr = [...a, ...b];
     arr.sort((a,b) => a-b);
     return arr=Array.from(new Set(arr))
}

////////////

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}
