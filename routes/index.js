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
// this adding route
router.route('/add').post((req,res)=>{
  const title=req.body.title;
  const body=req.body.body;
  const author=req.body.author;
  const description=req.body.description;
  const category=req.body.category;
  const newPost=new post({
      title,
      body,
      description,
      category,
      author, 
      date:toLocaleDateString
  })
  newPost.save()
  .then(()=>res.json('Post added'))
  .catch(err=>res.status(400).json('Error: ' + err))
})
//getting one post by specific id
router.route('/posts/:id').get((req,res)=>{
    post.findById(req.params.id)
    .then(post=>res.json(post))
    .catch(err=>res.status(400).json('Error:' +err))
})
// deleteing post
router.route('posts/:id').delete((req,res)=>{
    post.findByIdAndDelete(req.params.id)
    .then(()=>res.json('post deleted'))
    .catch(err=>res.status(400).json('Error:' + err))
})






module.exports=router