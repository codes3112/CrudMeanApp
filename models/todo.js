const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create mytodo Schema and model
const TodoSchema=new Schema({
    task:{
        type:String,
        required:[true,'Task field is required']
        },
        name:{
            type:String
        },
        status:{
            type:String,
            default:false
        }

});

//create model Mytodo
const Todo=mongoose.model('todo', TodoSchema);
module.exports=Todo;