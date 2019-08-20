function correct(string)
{
  var res = string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
  return res
}
