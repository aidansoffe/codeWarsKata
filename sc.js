function sc(floor){
  const str = 'Aa~ ';
  if(floor > 6) {
    return `${str.repeat(floor-1)}` + 'Pa!';
  }else if(floor <= 6 && floor >= 2){
  return `${str.repeat(floor-1)}` + 'Pa! Aa!';
  }else if(floor <= 1){
  return ""
  } 
 }
 
 ///////////
 
 function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}
