
//method4
// print a-z
var buf=require('buffer')
var z=new Buffer(126)
for(i=0;i<26;i++){
  z[i]=65+i
  z[26+i]=97+i
}
console.log(z)
console.log(z.toJSON())
console.log(z.toString())
