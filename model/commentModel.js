// import mangoose

const { default: mongoose } = require('mongoose');
const mangoose=require('mongoose');


// route handler

const commentSchema=new mangoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    }
});


// expors 
module.exports=mongoose.model("Comment ",commentSchema);