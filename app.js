const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',function(req,res)
{
  res.send("hey");
})

app.get('/create',async (req,res) =>
{
    let createduser = await userModel.create({
        name:"aasita",
        email:"aasita@gmail.com",
        username:"aasita"
    })
    res.send(createduser);

})

app.get('/read',async (req,res)=>{

    let users = await userModel.find()//and findOne({username:"Dishant"})
    res.send(users);

})

app.get('/update',async (req,res) =>
    {

    let updateduser = await userModel.findOneAndUpdate({username:"Dishant"},{name:"Dishant vijaybhai nakrani"},{new:true})
    res.send(updateduser);

})

app.get('/delete',async (req,res)=>{
    let users = await userModel.findOneAndDelete({username:"Dishant"})
    res.send(users);
})

console.log("hello");

app.listen(3000);