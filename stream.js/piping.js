// piping

var fs=require('fs')
var r=fs.createReadStream('sri.txt')
var w=fs.createWriteSt('z.txt')
r.pipe(w)
