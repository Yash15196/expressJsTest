var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
	name:String,
	age:Number,
	mobile:Number
});

var user=mongoose.model("user",userSchema);

module.exports=user; 