const express = require('express')
const dotenv= require('dotenv').config()
const connectDB = require('./connectDB')
const mongoose = require('mongoose')
const Task = require('./model/taskModel')
const task_route = require('./routes/taskroute')
const router = express.Router()
const cors = require('cors')

const app =express(express)

//middleware
app.use(express.json())
app.use(cors())
app.use(task_route)


//  creating a task 
// app.post('/api/tasks', create_task)
// this is a route 

app.get('/',(req,res) => {
    res.send('this is a response')
})

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen('5000',()=>{
        console.log('server running on port 5000')
     })
})
.catch((err) => {
    console.log(err)
})


// const Start = async () =>{
//     try{
// await connectDB();
// app.listen('5000',()=>{
//     console.log('server running on port 5000')
// })
//     }
//     catch (error){
// console.log(error)
//     }
// }

// Start()