const {MongoClient} = require('mongodb');
const connectionString= "mongodb://srv1:27017";

class dataBase{

    
   async connect(){
       const client = new MongoClient(connectionString/*, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         }*/);
   
       let connected = await client.connect();
       this.db = connected.db("212625917Nessi&Shira");
       
       console.log("DB Connected!")
   };
   
     getDB(){
         return this.db;
     }
   }
   
     module.exports = new dataBase();