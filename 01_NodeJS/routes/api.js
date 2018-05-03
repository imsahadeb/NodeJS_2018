const express = require('express');
const router = express.Router();

router.get('/request', function(req,res){
    res.send({
        type:'GET'
    });
});

router.post('/request', function(req,res){
    res.send({
        type:'POST'
    });
});
router.put('/request/:id', function(req,res){
    res.send({
        type:'PUT'
    });
});
router.delete('/request/:id', function(req,res){
    res.send({
        type:'DELETE'
    });
});

module.exports=router;