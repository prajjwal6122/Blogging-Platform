const User=require('../models/user');


const createUser=async (req,res)=>{
    try{
    const newUser=await User.create(req?.body);
    res.status(201).json(newUser)}
    catch{
    res.status(400).json()
    }
}

module.exports={createUser}