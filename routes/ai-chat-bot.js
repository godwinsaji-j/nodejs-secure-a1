var express = require('express');
const router = express.Router();

router.get('/home',async (req,res)=>{
    res.render('index');
});


module.exports = router