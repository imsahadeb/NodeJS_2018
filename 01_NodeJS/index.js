const express = require('express');
const routes=require('./routes/api');
const 
const app = express();
app.use('/api/get',routes);

app.listen(80,function(){
    console.log('Running Server on port 80');
});