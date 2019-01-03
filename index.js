const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//set up express app
const app=express();
const routes= require('./routes/api');

//connect to the database
mongoose.connect('Your Db Connection String',{useNewUrlParser:true});
mongoose.Promise=global.Promise;

app.use(express.static('public'));
app.set('view engine','html');

//bodyparser should be placed above routes
app.use(bodyParser.json());
//initialize routes
app.use('/api',routes);
//error handling middleware
app.use(function(err,req,res,next){
res.status(422).send({error:err.message});
});

//listen for requests

app.listen(process.env.port||4000,function(req,res){
console.log('Now listening for requests');
});
