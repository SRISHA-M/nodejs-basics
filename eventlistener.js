var z=require('events').EventEmitter

function Demo (num){
var e=new z()

setTimeout(function(){
    for(var i=1;i<=num;i++){
        e.emit('a',i)
        console.log('process work'+i)
        e.emit('b',i+4)
    }
},5000)
return e
}
var result=Demo(3)
result.on('a',function(data){
    console.log('before work'+data)
})
result.on('b',function(data){
    console.log('after work'+data)
})