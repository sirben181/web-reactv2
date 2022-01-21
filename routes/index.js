const express=require('express')
const router=express.Router()

//home route
router.get('/',(req,res)=>{
    res.send('<h2>welcome to this webpage  where we are talking about everything concerning tech</h2>')
})
const posts=[
    {    id:1,
        title:'Web development',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022'
    },{  id:2,
        title:'Web development',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022'
    },{  id:3,
        title:'Web development',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022'
    },{  id:4,
        title:'Web development',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022'
    },{  id:5,
        title:'Web development',
        body:'this is the best web development developer and thus this is a great guy',
        author:'ben',
        updated:'17th may 2022'
    }
]

//posts routes
router.get('/posts',(req,res)=>{res.json(posts)})







module.exports=router