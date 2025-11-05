const express= require('express')
const port=3000;
const app=express();
const uri='mongodb://127.0.0.1:27017/blogging_platform_db' 
const mongoose=require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(uri)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Failed:', err));

app.get('/',(req,res)=>{
    res.send('Welcome to my blogging platform')
})


app.listen(port)
