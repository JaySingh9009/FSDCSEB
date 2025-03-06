const express=require('express');
const app=express();
const port=3000
const path=require('path')
const user=[{id:101,name:"IIT"},
    {id:102,name:"NIT"}
]


app.get('/',(req,res)=>{
   
    console.log("data send by user==",req.query.name)
    res.send("welcome,"+req.query.name)

})
// app.get('/home',(req,res)=>{
//     res.sendFile(path.join(__dirname,"home.html"))

// })
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,"about.html"))

// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,"contact.html"))

// })
// app.get('/shop',(req,res)=>{
//     res.send("this is our shop page")

// })

app.listen(port,()=>{
    console.log(`app run at http://localhost:${port}`)
})