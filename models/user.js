const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    Name:String,
    Email:String,
    contact:{type:Number,default:'0000000000'},
    password:String,
    role:{ type: String, default: "user" },
});

const userModel=new mongoose.model("User",userSchema);

module.exports=userModel;