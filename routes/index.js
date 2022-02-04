const express=require('express')
const router=express.Router()
const post=require('../models/posts')


// setting what to use in this home route
// 


//posts routes
router.route('/').get((req,res)=>{
    post.find().sort({createdAt:'desc'})
    .then(posts=>res.json(posts))
    .catch(err=>res.status(400).json('Error: '+ err))
});
//getting one post by specific id
router.route('/:id').get((req,res)=>{
    post.findById(req.params.id)
    .then(post=>res.json(post))
    .catch(err=>res.status(400).json('Error:' +err))
})
// this adding route
router.route('/add').post((req,res)=>{
  const title=req.body.title;
  const body=req.body.body;
  const author=req.body.author;
  const description=req.body.description;
  const category=req.body.category;
  const createdAt=req.body.createdAt;
  const newPost=new post({
      title,
      body,
      author, 
      description,
      category,
      createdAt,
      
  })
  newPost.save()
  .then(()=>res.json('Post added'))
  .catch(err=>res.status(400).json('Error: ' + err))
})

// deleteing post
router.route('/:id').delete((req,res)=>{
    post.findByIdAndDelete(req.params.id)
    .then(()=>res.json('post deleted'))
    .catch(err=>res.status(400).json('Error:' + err))
    
})
//updating post
router.route('/update/:id').post((req,res)=>{
    post.findById(req.params.id)
    .then(post=>{
        post.title=req.body.title;
        post.body=req.body.body;
        post.description=req.body.description;
        post.author=req.body.author
        post.date=Date.parse(req.body.date)

        post.save()
        .then(()=>res.json('Post updated'))
        .catch(err=>res.status(400).json('Error:'+ err))

    })
    .catch(err=>res.status(400).json('Error:'+ err))

    
})






module.exports=router