const express=require('express')
const router=express.Router()
const post=require('../models/posts')
const blogPost=require('../models/blogPosts')


// setting what to use in this home route
// 


//posts routes
router.route('/posts').get((req,res)=>{
    post.find().sort({createdAt:'desc'})
    .then(posts=>res.json(posts))
    .catch(err=>res.status(400).json('Error: '+ err))
});
//getting one post by specific id
router.route('/posts/:id').get((req,res)=>{
    post.findById(req.params.id)
    .then(post=>res.json(post))
    .catch(err=>res.status(400).json('Error:' +err))
})
// this adding route
router.route('/posts/add').post(async(req,res)=>{
  const title=req.body.title;
  const createdAt =req.body.createdAt;
  const author=req.body.author;
  const description=req.body.description;
//   const category=req.body.category;
  const markdown=req.body.markdown;
  const newPost=new post({
      title,
      author, 
      description,
      markdown,
      createdAt,
      
  })
  try{
      postSaved = await newPost.save()
 res.json('Post added')
  console.log(postSaved)
    }catch(err){
        console.log('Error: ' + err)
        return res.status(400).json({err : 'err occurred when trying to save the post'})
}

})

// deleteing post
router.route('/posts/:id').delete((req,res)=>{
    post.findByIdAndDelete(req.params.id)
    .then(()=>res.json('post deleted'))
    .catch(err=>res.status(400).json('Error:' + err))
    
})
//updating post
router.route('/posts/update/:id').post((req,res)=>{
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
///BLOGPOST
//adding the blog routes
// router.route('/blogposts').get((req,res)=>{
//  blogPost.find().sort({createdAt:'desc'})
//     .then(blogposts=>res.json(blogposts))
//     .catch(err=>res.status(400).json('Error: '+ err))
// })
// // adding a new post
// router.route('/blogposts/add').post((req,res)=>{
//     const title=req.body.title;
//     const body=req.body.body;
//     const author=req.body.author
//     const  updateAt=req.body.updateAt;
//     const likes=req.body.likes;
//     const comments=req.body.comments;
//     const blogP=new blogPost({
//         title,
//         body,
//         author,
//         updateAt,
//         likes,
//         comments,
//     })
//     blogP.save()
//    .then(()=> res.json('blogpost added')) 
        
//     .catch (err=>res.status(400).json('Error:' + err))
        
    

// })





module.exports=router