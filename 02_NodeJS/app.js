const express =require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//routes
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

//Error Handling

app.use((req,res,next)=>{
    const error = new Error();
    res.status(404);
});
app.use((error,res,next)=>{
    
})

module.exports=app;