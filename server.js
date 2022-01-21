const express=require('express')
const dotenv=require('dotenv')
const cors =require('cors')
const connectDB=require('./config/db')

const app=express()
dotenv.config({path:'./config/config.env'})
const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200}
connectDB();
const PORT=process.env.PORT || 5000

app.use(cors())
 

app.use('/',require('./routes/index'))
app.use('/posts',cors(corsOptions),require('./routes/index'))
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})