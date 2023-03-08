var express = require('express');
var app = express();
const mysql= require("mysql")
var cors = require("cors");
app.use(cors());
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
app.get("/getData",function(req,res){
    const connection=mysql.createConnection({
        host:'localhost',
        port:3306,
        database:"Images",
        user:"root",
        password:"password"
    })
    connection.connect(function(err){
        if(err){
            console.log("error occured" ,err);
        }
        else{
            console.log("connected successfully");
            connection.query("select * from Images",(err,result)=>{
        if(err){
            console.log("error while fetching data",err );
        }
        if(!err){
            console.log("all results are here",result);
            res.send(result)
        }
            })
        }
    })
})
app.post("/sendData",(req,res)=>{
        var Name=req.body.Name;
        var Facebook_image=req.body.Facebook_image;
        var Twitter_image=req.body.Twitter_image;
        var Instagram_image=req.body.Instagram_image;
        var Linkedin_image=req.body.Linkedin_image;

    const connection=mysql.createConnection({
        host:'localhost',
        port:3306,
        database:"Images",
        user:"root",
        password:"password"
    })
    connection.connect(function(err){
        if(err){
            console.log("error occured" ,err);
        }
        else{
            console.log("connected successfully");
            connection.query(`INSERT into Images (Name,Facebook_image,Twitter_image,Instagram_image,Linkedin_image) VALUES(${"'"+Name + "'"},${"'"+Facebook_image + "'"}, ${"'"+Twitter_image + "'"}, ${"'"+Instagram_image + "'"}, ${"'"+Linkedin_image + "'"})`,(err,res)=>{
        if(err){
            console.log("error while sending data",err );
        }
        if(!err){
            console.log("data inserted successfully");
        }
            })
        }
    })
})
app.listen(5005, function () {
    console.log('Server is running..');
});
