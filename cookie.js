function cookie(x){
  if(typeof x === 'string'){
    return "Who ate the last cookie? It was Zach!"
  } else if (!isNaN(parseFloat(x)) || Number.isInteger(x)){
    return 'Who ate the last cookie? It was Monica!'
  } else {
  console.log('!!!!!', x)
    return 'Who ate the last cookie? It was the dog!'}
}
