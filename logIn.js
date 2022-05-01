const fsp = require("fs/promises");
const userCls = require("./user");
const dateCls = require("./showDate");


async function logIn(email, pass) {

   const data= await fsp.readFile("./users.json", 'utf8')
        this.arr = JSON.parse(data);
        let ind = this.arr.findIndex(u => u.email == email && u.password == pass);

        if (ind != -1) {
            this.arr[ind].date = new Date()
            fsp.writeFile("./users.json", JSON.stringify(this.arr), 'utf8')


        }
        // else {
        //     this.arr.push(user);
        // fsp.writeFile("./users.json", JSON.stringify(this.arr), 'utf8')                 
        // }

        return new Promise((res, rej) => {
            if (ind != -1)
                res(this.arr[ind])
            else
                rej(new Error())
        })

}
async function getAllUsers(email, pass) {

    const data= await fsp.readFile("./users.json", 'utf8')
         this.arr = JSON.parse(data);
 
         return new Promise((res, rej) => {
             if (arr)
                 res(this.arr)
             else
                 rej(new Error())
         })
 
 }
 async function addNewUser(fName, lName,email, pass) {

    const data= await fsp.readFile("./users.json", 'utf8')
         this.arr = JSON.parse(data);
         const user1 = new userCls(fName, lName, email, pass, new Date());

         this.arr.push(user1);
         fsp.writeFile("./users.json", JSON.stringify(this.arr), 'utf8')
 
         return new Promise((res, rej) => {
             if (this.arr)
                 res(user1)
             else
                 rej(new Error())
         })
    
 
 }
 async function updateUser(fName, lName,email, pass) {
    const data= await fsp.readFile("./users.json", 'utf8')
    this.arr = JSON.parse(data);
        let ind = this.arr.findIndex(u => u.email == email && u.password == pass);

        if (ind != -1) {
        const user1 = new userCls(fName, lName, email, pass, date.getDateString());
            this.arr[ind]=user1;
            fsp.writeFile("./users.json", JSON.stringify(this.arr), 'utf8')


        }

        return new Promise((res, rej) => {
            if (ind != -1)
                res(this.arr[ind])
            else
                rej(new Error())
        })
 
 }
 async function deleteUser(email) {
    const data= await fsp.readFile("./users.json", 'utf8')
    this.arr = JSON.parse(data);
        let ind = this.arr.findIndex(u => u.email == email);

        if (ind != -1) {
       
            this.arr.splice(ind,1);
            fsp.writeFile("./users.json", JSON.stringify(this.arr), 'utf8')


        }

        return new Promise((res, rej) => {
            if (ind != -1)
                res(true)
            else
                rej(new Error())
        })
 
 }
// a=new logInFile();
// a.logIn("123@gmail.com",123)
module.exports = { logIn,getAllUsers,addNewUser,updateUser,deleteUser};