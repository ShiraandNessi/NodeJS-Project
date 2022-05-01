const mongoose=require ('mongoose')
const adressSchema = new mongoose.Schema ({
    city :String,
      street :String,
      num :Number,
     
});
const userSechema = new mongoose.Schema({
     fName :String,
       lName :String,
       email :String,
       pass :String,
       address:adressSchema 
});
module.exports=mongoose.model('UserModel',userSechema )
