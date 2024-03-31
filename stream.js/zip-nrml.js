// zip file to nrml file

var fs=require('fs')
var z=require('zlib')
var r=fs.createReadStream('sri.txt')
var w=fs.createWriteStream('sri.txt')
r.pipe(z.createGunzip).pipe(w)