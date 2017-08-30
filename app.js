var express =require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var sum=require("./routes/sum")
// connect to Mongoose

 var add=require('./routes/add')
/*app.get('/',function(req,res){
	res.send('hello ');
});*/
app.use('/add',add);
app.use('/',sum);

app.listen(3000);
console.log("Running on port 3000");

module.exports=app;