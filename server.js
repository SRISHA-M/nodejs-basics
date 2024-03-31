// create server 
var z=require('http')
port=3000
z.createServer(function(req,res){
    res.write('how are you!i am fine')
    res.end()
}).listen(3000)
console.log(z)
