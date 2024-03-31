// read stream

var fs=require('fs')
var sri=""
var r=fs.createReadStream('sri.txt')
r.setEncoding('UTF8')
r.on('data',function(chunk){
    sri +=chunk
})
r.on('end',function(){
    console.log(sri)
})
r.on('error',function(){
    console.log('error occured')
})





