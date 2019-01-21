const mongoose= require('mongoose');

let passportLocalMongoose = require('passport-local-mongoose');

// i ll create only the connection and model here and export the model 
mongoose.connect('mongodb://localhost/new_db_colt')
.then(()=>{console.log('yo yo connected to db')})
.catch((err)=>{console.log('error occured',err)})

// when db is connected ill make a schema for my collection 

const UserSchema=new mongoose.Schema({
    user:{type:String ,required:true},
    password:{type:String ,required:true}
});
 

UserSchema.plugin(passportLocalMongoose);// for various functions of apssport local mongoose 

let User=mongoose.model('User',UserSchema);
module.exports=User



