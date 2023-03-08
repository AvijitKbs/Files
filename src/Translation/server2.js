const express=require("express");
const cors=require("cors")
const app=express();
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))

app.post("/api/login",(req,res)=>{
       console.log("data inserted successfully")
})

app.listen(3042,()=>{
    console.log("listening on 3042")
})