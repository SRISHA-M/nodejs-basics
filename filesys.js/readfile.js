// readFile
var fs=require('fs')
 var z=fs.readFileSync("z.txt")
console.log(z)
console.log(z.toJSON())
console.log(z.toString())
