function hello(name) {
if(name === '' || name === undefined){
  return 'Hello, World!'}
  
let nameIs = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
  if(nameIs){
  return "Hello, "+nameIs+"!"
  }else if(nameIs === '' || nameIs === undefined){
  return 'Hello, World!'}
}

///////////////

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
  
