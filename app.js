const express=require('express');
const home =require('./routes/home.js');
const register =require('./routes/register.js');
const passport =require('passport');
const localStrategy =require('passport-local');
const passportLocalMongoose =require('passport-local-mongoose');
const session =require('express-session');

const User=require('./connections/Users_model')



const app= express();
//app.use(express.urlencoded(extended:true));

app.set('view engine',"ejs");
app.use(express.urlencoded({
    extended: true
 }));
app.use('/',home);
app.use('/',register);
// telling app to use passport local 
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret:"sshh this is a secret key",
    resave:false,
    saveUninitialized:false 
}));
app.use(express.json());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// now creating objects of class returned by Users_model 


app.listen(3000);