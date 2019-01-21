const express=require('express');
const router = express.Router();
const User=require('/connections/Users_model')


//const register =require('./routes/register.js');
const passport =require('passport');
const localStrategy =require('passport-local');
const passportLocalMongoose =require('passport-local-mongoose');
const session =require('express-session');



router.get('/register',(req,res)=>{
res.render('register');


});

router.post('/register',(req,res)=>{
User.register(new User({

username:req.body.username,
password:req.body.password

},(err,user)=>{
    if(err){
        return err
    }
    passport.authenticate('local')(req,res,function(){
        res.redirect('/test');
    })
}

))
    



    
})
module.exports = router;

