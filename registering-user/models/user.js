
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/test')
.then(()=>console.log('connected to database'))
.catch((err)=>console.log(err));



mongoose.disconnect().then(()=>console.log('successfully discoonectd'))
.catch((err)=>console.log('not disconnected' ))