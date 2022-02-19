const mongoose=require('mongoose');

const customer=new mongoose.Schema({
    name:String,
    address:String,
    age:Number
});

module.exports=mongoose.model('customers',customer);