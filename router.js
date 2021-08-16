var express=require('express');
var router=express();

const credentials={
    email:"gagidennis",
    password:"12345"
}
router.post('/login',(req ,res)=>{
    if (req.body.email==credentials.email && req.body.password==credentials.password){
          req.session.user=req.body.email;
          res.redirect('/route/dashboard');
        
    }
    else{
        res.send("invalid credentials")
    }
})

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("unauthorized")
    }
})

module.exports = router;