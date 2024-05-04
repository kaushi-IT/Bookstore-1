const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
     id:{type:Number,required:true},
     title:{type:String,required:true},
     category:{type:String,required:true},
     cost:{type:Number,required:true},
});
const ProductModule=mongoose.model("Products",UserSchema);
module.exports=ProductModule;