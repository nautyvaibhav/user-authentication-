const express=require('express');
const validate=require('./models/validate')
const app=express();
console.log(validate)
//for middleware post functionalities
                                     
app.use(express.json());

app.post('/api/course',(req,res)=>{

    let user={
name:req.body.name,
password:req.body.password,
email:req.body.email,

    }
    console.log(user);
    // now i have the user object now its time to validate it ...
validate(user);
res.send("message");

})




app.listen(3000,console.log('the server is running on port 3000'))