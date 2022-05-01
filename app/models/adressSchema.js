const mongoose=require ('mongoose')
const adressSchema = new mongoose.Schema ({
     city :String,
       street :String,
       num :Number,
      
});
module.exports=mongoose.model('adressModel',adressSchema )
