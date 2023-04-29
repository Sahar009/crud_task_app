const express = require('express')
const Task = require('../model/taskModel')
const {create_task, get_tasks, get_single_task, update_task,delete_task} =require('../controller/Taskcontroller')
const router = express.Router()


//creating a task 
router.post('/api/tasks', create_task);
router.get('/api/tasks',get_tasks)
router.get('/api/tasks/:id',get_single_task)
router.put('/api/tasks/:id',update_task)
router.delete('/api/tasks/:id', delete_task)



module.exports = router