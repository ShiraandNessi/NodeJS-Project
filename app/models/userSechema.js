const mongoose = require('mongoose')
const adressSchema = new mongoose.Schema({
  city: String,
  street: String,
  num: Number,

});
const userSechema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: {
    type: String,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
  ,
  pass:{
    type:String,
   minlength: 3
  } ,
  address: [adressSchema]
});
userSechema.virtual('myOrders', {
  ref: 'order',
  localField: '_id',
  foreignField: 'user'
})
userSechema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('UserModel', userSechema)
