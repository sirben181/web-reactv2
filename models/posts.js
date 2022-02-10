const mongoose=require('mongoose')

const postSchema=  new mongoose.Schema({
    title:{type:String, required:true},
    // createdAt:{type: Date, 
    //     default: (new Date().toLocaleDateString())},
    author:{type: String, required:true},
    description:{type: String, require:true},
    markdown:{type: String, required:true},
    timestamps:{type: Date, required:true}
    

}) 
 
module.exports=mongoose.model('posts',postSchema)