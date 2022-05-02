const express = require('express')
const user = require ('./app/routes/userRoutes')
const category = require ('./app/routes/categoryRoutes')
const product = require ('./app/routes/productRoutes')
const order = require ('./app/routes/orderRoutes')
const app=express();
const port = 3000
const db=require('./app/DB/mongooseDB')
db.connect()
app.use(express.static('./app/Static'))
app.use(express.json());
app.use('/api/user',user)
app.use('/api/category',category)
app.use('/api/product',product)
app.use('/api/order',order)
app.listen(port)
console.log("server is uuupppp")