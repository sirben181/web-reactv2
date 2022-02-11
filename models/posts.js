const mongoose=require('mongoose')

const postSchema=  new mongoose.Schema({
    title:{type:String, required:true},
    author:{type: String, required:true},
    description:{type: String, require:true},
    markdown:{type: String, required:true},
},
{timestamps:true}) 
 
module.exports=mongoose.model('posts',postSchema)