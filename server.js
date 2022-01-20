const express=require('express')
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

const PORT=process.env.PORT || 5000

const app=express()


app.use('/',require('./routes/index'))
app.use('/posts',require('./routes/index'))
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})