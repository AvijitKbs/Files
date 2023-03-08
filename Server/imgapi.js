var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var connectionString = "mongodb://localhost:27017";
 var app = express();
// app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({
//     extended:true
// }));
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("reactdb");
            database.collection("Image").find({}).toArray((err, documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.post("/registerusers", (req,res)=>{
            var details={
                Facebook_image:req.body.Facebook_image,
                Twitter_image:req.body.Twitter_image,
                Instagram_image:req.body.Instagram_image,
                Linkedin_image:req.body.Linkedin_image,
            }
            console.log("details",details)
mongoClient.connect(connectionString,(err,clientObj)=>{
 if(!err){
         clientObj.db("reactdb").collection("Image").insertOne(details,()=>{
         console.log("data inserted successfully")
     })
 }
})
})
app.listen(4060);
console.log("Server Started : http://127.0.0.1:4060")