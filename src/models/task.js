const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
        requied:true,
        type:String,
        trim:true
    },
    completed:{
        default:false,
        type:Boolean
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }

},{
    timestamps:true
})





const Task = mongoose.model('Task',taskSchema)
module.exports=Task