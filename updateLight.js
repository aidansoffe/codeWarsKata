function updateLight(current) {
  if(current === "green"){
  return "yellow"
  }else if(current === "yellow"){
  return "red"
  }else if(current === "red"){
  return "green"}
}

//////////////

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    default:
      return 'green';
  }
}
