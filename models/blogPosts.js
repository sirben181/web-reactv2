const mongoose=require('mongoose')
const blogSchema=new mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
    author:{type:String, required:true},
    updatedAt:{type: Date, default: new Date},
    createdAt:{type:Date, default: new Date},
    likes:{type: Number},
    comments:{type: String,}

})

module.exports=mongoose.model('blogPosts',blogSchema)