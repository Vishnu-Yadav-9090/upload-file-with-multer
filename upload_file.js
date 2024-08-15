const multer = require("multer");
const express = require("express");
const app = express();

const uploadfile = multer({
    storage:multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"uploded file")
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname+"-"+ Date.now()+".jpg")
        }
    })
}).single("new file")

app.post("/",uploadfile,(req,resp)=>{
    resp.send("file uploaded")
});
app.listen(3000);       