const express=require('express')
const router=express.Router()
const post=require('../models/posts')

//home route
router.route('/').get((req,res)=>{
    res.send('<h2>welcome to this webpage  where we are talking about everything concerning tech</h2>')
})

//posts routes
router.route('/posts').get((req,res)=>{
    post.find()
    .then(posts=>res.json(posts))
    .catch(err=>res.status(400).json('Error: '+ err))
});
router.route('/add').post((req,res)=>{
  const title=req.body.title;
  const body=req.body.body;
  const author=req.body.author;
  const newPost=new post({
      title,
      body,
      author, 
  })
  newPost.save()
  .then(()=>res.json('Post added'))
  .catch(err=>res.status(400).json('Error: ' + err))
})







module.exports=router