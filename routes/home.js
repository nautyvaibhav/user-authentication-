const express=require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
console.log('here');
    res.render('home');
});

router.get('./home',(r,re)=>{
    re.send('poooo')
})

module.exports = router;

