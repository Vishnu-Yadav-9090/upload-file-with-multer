const multer = require("multer");
const express = require("express");
const { sign } = require("crypto");
const app = express();

const upload =  multer({
    storage:multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, "uploded files")
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname +"_"+Date.now()+".jpg")
        }
    })
}).single("new file")

app.post("/",upload,(req,resp)=>{
    resp.send('file is uploded')
});
app.listen(4000);