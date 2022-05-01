const express = require('express')
const user = require ('./app/routes/userRoutes')
const category = require ('./app/routes/categoryRoutes')
const product = require ('./app/routes/productRoutes')
const order = require ('./app/routes/orderRoutes')
const app=express();
const port = 3000
const db=require('./app/DB/mongooseDB')
db.connect()
app.use(express.json());
app.use('/user',user)
app.use('/category',category)
app.use('/product',product)
app.use('/order',order)
app.listen(port)
console.log("server is uuupppp")