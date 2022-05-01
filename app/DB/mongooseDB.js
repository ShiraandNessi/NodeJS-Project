
let mongoose=require('mongoose');

class dataBase{
    constructor(){
      this.connect()
    }  

    async connect(){
        mongoose.connect(`mongodb://${'srv1:27017'}/${"212625917Nessi&Shira"}`)
    .then(()=>{
      console.log('database conected')
    }).catch(err=>{
      console.error(err)
    })
     
   };
   
     getDB(){
         return this.db;
     }
   }
   
   
     module.exports = new dataBase();