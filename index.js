class Formatter {
 
  static capitalize(string){
   
const someString = string[0].toUpperCase() + string.slice(1)
return someString
}
  static sanitize(string){
    const keep = /[^- ,' A-Za-z0-9]+/g;
   const newString = string.replace(keep,"")
   return newString

  }
  static titleize(string){
    const errorArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
 const updatedString = string.split(" ")
let emptyString = ""
console.log(emptyString)
for (let i = 0; i < updatedString.length; i++){
  emptyString += " ";
  
  if(errorArray.includes(updatedString[i]) && (i !== 0)){
  emptyString +=  updatedString[i]
  } else {
  emptyString += updatedString[i][0].toUpperCase() + updatedString[i].slice(1)
  }
  
}

return emptyString.slice(1)

}
}