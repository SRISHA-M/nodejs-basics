// nrml file to zip file
var fs=require('fs')
var z=require('zlib')
var r=fs.createReadStream('sri.txt')
var w=fs.createWriteStream('sri.txt')
r.pipe(z.createGzip).pipe(w)
