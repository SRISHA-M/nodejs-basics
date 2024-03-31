
// write stream

var fs=require('fs')
var sri=""
var w=fs.createWriteStream('sri.txt')
w.write('hii hellow how are you')
w.end()
w.on('finish',function(){
 console.log('completed')
})
w.on('error',function(err){
if(err){
    console.log('error occured')
}
})
