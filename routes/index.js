const express=require('express')
const router=express.Router()

//home route
router.get('/',(req,res)=>{
    res.send('<h2>welcome to this webpage  where we are talking about everything concerning tech</h2>')
})
//posts routes
router.get('/posts',(req,res)=>{res.json('posts are done here')})







module.exports=router