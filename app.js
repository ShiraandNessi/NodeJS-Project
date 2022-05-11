const express = require('express')
const user = require ('./app/routes/userRoutes')
const category = require ('./app/routes/categoryRoutes')
const product = require ('./app/routes/productRoutes')
const order = require ('./app/routes/orderRoutes')
const app=express();
const logger=require('./logging/logger')
const port = 3000
const db=require('./app/DB/mongooseDB')
const path=require('path');
const middelwaers=require('./logging/middelwaers')
db.connect()
app.use(express.static('./app/Static'))
app.use(express.json());
app.use('/api/user',user)
app.use('/api/category',category)
app.use('/api/product',product)
app.use('/api/order',order)
app.use((err,req,res,next)=>{
    logger.info(err.stack)
    next(err)
})
app.use((err,req,res,next)=>{
    if (req.xhr)
        res.status(500).send({error: "failed;its up to you; its your faluite"})
    else
        next(err)})
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'./app/Static/404.html'))
    });
// app.use(middelwaers.logErrors)
// app.use(middelwaers.errorHandler)
app.listen(port)
logger.info("server is uuupppp") 