


function count(str, char){
  str.split('');
  const stringArray= [...str.split('')];
  const newArray = stringArray.filter((item) => {return item === char});
  return newArray.length;
  
}
console.log(count("Hello","l"));
