const express=require('express');
const router=express.Router();
const Todo=require('../models/todo');
//get a todo list from the db
router.get('/todos',function(req,res,next){
    //res.send({type:'GET'});
    Todo.find({}).then(function(todos){
        //res.send(todos);
        res.json(todos);
    });
});

router.post('/todos',function(req,res,next){
    // console.log(req.body);
    //creating an instance of the model
   Todo.create(req.body).then(function(todo){
       //res.send(todo);
       res.json(todo);
   }).catch(next);
});
    // res.send({
    //     type:'POST',
    //     name:req.body.name,
    //     rank:req.body.rank
    // })
    //res.send({type:'POST'});

    router.get('/todos/:id',function(req,res,next){
        //res.send({type:'GET'});
        Todo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(todo){
            Todo.findOne({_id:req.params.id}).then(function(todo){
                //res.send({todo});
                res.json(todo);
        });
    });
});

router.put('/todos/:id',function(req,res,next){
    Todo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(todo){
        Todo.findOne({_id:req.params.id}).then(function(todo){
            //res.send({todo});
            res.json(todo);
        });
        

    // Alternative
    // Todo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(todo){
    // Todo.findOne({_id:req.params.id}).then(function(todo){
        //});
    
    });
});

router.delete('/todos/:id',function(req,res){
Todo.findByIdAndRemove({_id:req.params.id}).then(function(todo){
    //res.send(todo);
    res.json(todo);
});

    //console.log(req.params.id);
    //res.send({type:'DELETE'});
});
module.exports=router;

