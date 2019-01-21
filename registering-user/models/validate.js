const mongoose=require('mongoose');
const joi=require('joi');
const PasswordComplexity = require('joi-password-complexity');


mongoose.connect('mongodb://localhost/books_db',{autoReconnect: false})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))

const schema=new mongoose.Schema({
        name:String,
        password:String,
        email:String

});

const User=mongoose.model('User',schema);




async function validateUser(user){
        //getting a user as an argument from index which is provided by the user 

        // now i ll validate the user by joi 
        try{
        let resu=await joiValidateUser(user)
    
        if(resu)
        {
              //let res=await user.save();

              // if everything is alright ill create an object for User the model class 

              let u=new User({
                    name:user.name,
                    email:user.email,
                    password:user.password



              });

                console.log('it can be saved');

                let result=await u.save();
                console.log(`the ${user} is saved to the database `);

        }
        else{
            mongoose.disconnect();
            console.log('username or password is invalid')
        }
    }
        catch(err) { 
            
            console.log('ERROR -------------------------',err)
        }
console.log('======')

        
}
/*

mongoose.disconnect().then(()=>console.log('successfully discoonectd'))

.catch((err)=>console.log('not disconnected' ))

        console.log('======')
        */
     
async function joiValidateUser(user){
    //console.log('inside joi');
    // for password complexity 
    const complexityOptions = {
        min: 8,
        max: 30,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 2,
      }
 
      // joi.validate(
    const joiSchema ={
        name:joi.string().min(3),
        password:joi.string(),
       email:joi.string()
    }
   
    let res=await joi.validate(user,joiSchema);

    joi.validate(user.password, new PasswordComplexity(complexityOptions), (err, value) => {
        if(err) {console.log(err.details[0].message);
        res=false;
        mongoose.disconnect();
        }
        else {
            if(value){
                console.log(value);
                if(!res.error){
                    res=true;
                    return true
                }
                else{
                    res=false;
                    mongoose.disconnect();
                    return false 
            }
            }
        }
    } );

    return res;
}

module.exports=validateUser



 

