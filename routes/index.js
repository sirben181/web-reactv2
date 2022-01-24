const express=require('express')
const router=express.Router()

//home route
router.get('/',(req,res)=>{
    res.send('<h2>welcome to this webpage  where we are talking about everything concerning tech</h2>')
})
const posts=[
    {   id:1,
        title:'Creating a wordpress themes',
        body:'Join us and we are going to create a wordpress them for you,depending on your choices.if you dont have those choices we can help you decide and make  your dream come true.We are the best wordpress developers around.',
        author:'ben',
        updated:'20th jan 2022',
        to:'/services'
        
    },{  id:2,
        title:'Domain registrations',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'19th may 2022',
        to:'/services'

    },{  id:3,
        title:'About us',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022'
    },{  id:4,
        title:'Blogging about us',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022',
        to:'/blog'
    },{  id:5,
        title:'the best program we got over here',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022',
        to:'/about'
    },{
        id:6,
        title:'Web development',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022',
        to:'/services'
    }
]

//posts routes
router.get('/posts',(req,res)=>{res.json(posts)})







module.exports=router