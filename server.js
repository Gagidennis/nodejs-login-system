const express=require('express');
const app=express();
const path=require('path');
const bodyparser=require('body-parser');
const session=require('express-session');
const { randomUUID } = require('crypto');
const router=require('./router');

const port=process.env.PORT||23000;


app.engine('ejs',require('ejs').__express);
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use('/static',express.static(__dirname + '/public'));
app.use(bodyparser.json())
 app.use(bodyparser.urlencoded({extended:true}))

 app.use(session({
     secret:'randomUUID',
     resave:false,
     saveUninitialized:true
 }))
app.use('/route',router)

app.get('/',(req,res)=>{
    res.render('base',{title:"login system"})

})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})