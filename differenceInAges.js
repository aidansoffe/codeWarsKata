function differenceInAges(a){
let m = Math.min(...a);
let max = Math.max(...a);
return [m,max, max-m]
}
