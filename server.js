const express=require('express')
const path=require('path')
const dotenv=require('dotenv')
const postsRouter=require('./routes/index')
const cors =require('cors')
const connectDB=require('./config/db')


dotenv.config({path:'./config/config.env'})

connectDB();

const app=express()
const PORT=process.env.PORT || 5000
//setting views
 app.set('view engine','ejs')

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({
    extended: false
}));
//
app.get('/',(req,res,next)=>{
    res.render('home')
    next()
})

// app.use('/',require('./routes/index'))

app.use('/posts',postsRouter)

// app.use('/posts/:id',require('./routes/index'))
// app.use('/posts/:id',require('./routes/index'))

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})