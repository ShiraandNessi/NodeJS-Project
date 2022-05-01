
const db=require('../DB/user')

module.exports.getUserById= async function getUserById(req,res){
  
    const user = req.params.user;
    const pass =  req.params.pass;
    const currUser = await db.getDB().collection('user').find({email: user},
                                                                {pass: pass}).toArray();
      res.send(currUser)
}

module.exports.getAllUsers= async function getAllUsers(req,res){

    const users= await db.getDB().collection('user').find({}).toArray();
    res.send(users);
}

module.exports.addNewUser= async function addNewUser(req,res){
   const { fName,lName, email, pass } = req.body;
    let user1 = { 
        fName:fName,
        lName:lName,
        email:email,
        pass: pass   
    }

  await db.getDB().collection('user').insertOne(user1);
    res.send(`add user ${user1.name} by id ${user1.id}`);
}

module.exports.updateUser= async function updateUser(req,res){

    const { fName,lName, email, pass } = req.body;
    let user1 = { 
        fName:fName,
        lName:lName,
        email:email,
        pass: pass   
    }
    let id1=req.params.id;

    const nid = await db.getDB().collection('user').updateOne({_email:id1},user1);
    res.send(`add user ${user1} by id ${id1}`);
}
// module.exports.deleteUser= async function deleteUser(req,res){

//     await logIn1.deleteUser(req.params.email)
//       .then(response=>{res.send(JSON.stringify(response)),console.log(JSON.stringify(response))})
//         .catch(err=>res.send("notFound"))
// }