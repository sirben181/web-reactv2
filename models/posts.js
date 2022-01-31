const mongoose=require('mongoose')

const postSchema=  new mongoose.Schema({
    title:{type:String, required:true},
    createdAt:{type:Date, default: Date.now},
    author:{type: String, required:true},
    description:{type: String, require:true},
    body:{type: String, required:true}
    

}) 
 
module.exports=mongoose.model('posts',postSchema)