// open file
const console= require('console')
var fs=require('fs')
fs.open('z.txt','r',function(err,fd){
    if(err){
        console.log("error")
    }
    fs.read(fd,function(err,byte,buf){
        if(err){
            Console.log("error")
        }
        console.log(byte)
        console.log(buf)
        console.log(buf.toJSON())
        console.log(buf.toString())
    })
})