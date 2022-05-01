
const userModel=require('../models/userSechema')
const { ObjectId } = require('mongodb');
module.exports.getUserById= async function getUserById(req,res){
  
    const user = req.params.user;
    const pass =  req.params.pass;
    const currUser = await userModel.find({email: user},
                                        {pass: pass});
      res.send(currUser)
}

module.exports.getAllUsers= async function getAllUsers(req,res){

    const users= await userModel.find({});
    res.send(users);
}

module.exports.addNewUser= async function addNewUser(req,res){
   const { fName,lName, email, pass, address } = req.body;
    let user1 = new userModel( { 
        fName,
        lName,
        email,
        pass,
        address 
    })

  await user1.save()
    .then(doc=>console.log(doc))
    .catch(err=>console.log(err));
    res.send(`add user ${user1.name} by id ${user1.id}`);
}

module.exports.updateUser= async function updateUser(req,res){

    const { fName,lName, email, pass, address } = req.body;
    let user1 ={$set: { 
        fName,
        lName,
        email,
        pass ,
        address 
    }}
    let id1=req.params.id;
    const nid = await userModel.updateOne({_id:id1},user1);
    console.log(id1)
    res.send(id1);
}
module.exports.deleteUser= async function deleteUser(req,res){
    const email=req.params.email
    // const currUser1 = await userModel.find({email: email});
 
    await userModel.deleteOne({_id:ObjectId(email)})
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    res.send(`${email} deleted!!!!`)
}