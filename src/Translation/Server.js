const jwt = require('jsonwebtoken');
const express=require("express");
const cors = require("cors");
const posts =[
    {
        username:"kyle",
        title:"post1"
    },
    {
        username:"ab",
        title:"post2"
    }
]
const app=express();
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
//To store user
app.get("",(req,res)=>{
    res.send(posts)
})
//To create token.
app.post("/login",(req,res)=>{
   const userName=req.body.details.name

   const password=req.body.details.password
   const user={userName,password}
   //serialize user using jwt secret key
   const accessToken=jwt.sign(user,"eaashtrgfvykbjtfrvdfubhgngyftyfuytgigjftufjvhjjjjjjjfffffjhvyhhhhhhhhhhyhyfv",)
   res.send({accessToken,userName})
   console.log("token",accessToken )
   console.log("username",userName )
})
//middleware to authenticate/verify user
// const authenticateUser=(req,res,next)=>{
//     const authHeader=req.headers['authorization']
//     //split,as space between bearer and token
//     const token=authHeader && authHeader.split(' ')[1]
// }
app.listen(2050,()=>{
    console.log("listening at 2050")
})