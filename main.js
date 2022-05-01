const fsp = require("fs/promises");
const server=require("./server")
const userCls = require("./user");
const dateCls = require("./showDate");
const { resolve } = require("path/posix");
let file;

    
try {
    file = fsp.open('users.json', 'w');
}
catch (ex) {
    console.log("error", ex)
}
async function createFile(){
let d = new Date(2020, 12, 12)
let date = new dateCls(d)
const user1 = new userCls("yosef", "Cohen", "123@gmail.com", "123", date.getDateString());
const user2 = new userCls("yosef2", "Cohen2", "123123@gmail.com", "1232", date.getDateString());
let userArr = [user1, user2];
const jsonArr = JSON.stringify(userArr)
await fsp.writeFile("./users.json", jsonArr)
const app = new server();
}
createFile();
