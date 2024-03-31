var z=require('bcrypt.js')
pw="srisha"
z.gensalt(1,function(err,salt){
    z.hash(pw,salt,function(err,hash){
        console.log(hash)
        z.compare("srisha",hash,function(err,suc){
            console.log(success)
        })
    })
})