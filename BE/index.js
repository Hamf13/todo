const express = require("express");
const app = express();
const sequelize = require("./models/index").sequelize
const DataTypes = require("sequelize")
const User = require("./models/user")(sequelize,DataTypes)

app.use(express.json());


app.post ("/register",async(req,res)=>{
  const data = await User.create({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password,
  })
  res.status(202).json({message:"berhasil",data:data})
  
}) 

app.get ("/get",async(req,res)=>{
  const data = await User.findAll()
  res.status(202).json({message:"berhasil",data:data})
  
})

app.listen(3000, () => console.log("listening at port: 3000"));
