const express=require('express')
const dotenv=require('dotenv')
const cors =require('cors')
const connectDB=require('./config/db')


dotenv.config({path:'./config/config.env'})

connectDB();

const app=express()
const PORT=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}));

app.use('/',require('./routes/index'))
app.use('/posts',require('./routes/index'))
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})