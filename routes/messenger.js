var express = require('express');
const router = express.Router();

router.get('/home',async (req,res)=>{
    res.send("Hello World!");
});


module.exports = router