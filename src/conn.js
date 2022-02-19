const mongoose=require('mongoose');

// var url = "mongodb://localhost:27017/mydb";
var url="mongodb+srv://node:node123@cluster0.pwh4i.mongodb.net/node?retryWrites=true&w=majority"

mongoose.connect(url,()=>{
    console.log("connected...");
});





