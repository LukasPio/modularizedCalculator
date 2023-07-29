//I import the functions that will do we count
import soma from "./somarModule.js"
import subtrai from "./subtrairModule.js"
import multiplica from "./multiplicarModule.js"
import dividi from "./dividirModule.js"


//I use prompt, to get the values of the variables
const x = parseInt(prompt('valor de x'))
const y = parseInt(prompt('valor de y'))


//I call the result of the functions with the values that the user chose
console.log(

soma(x, y),

subtrai(x, y),

multiplica(x, y),

dividi(x, y)

)