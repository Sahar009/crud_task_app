const Task = require('../model/taskModel')
//  creating a task 

 const create_task = async (req,res) =>{
    //     console.log(req.body)
    // res.send('task created')
    try {
        const task = await Task.create(req.body)
        
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    }
    // get all task 
    const get_tasks = async (req,res) =>{
        try {
            const task = await Task.find()
            res.status(200).json(task)

        } catch (error) {
            res.status(500).json({msg:error.message})
            
            
        }
    }
    //get a single task
 const get_single_task = async (req, res) =>{
    try {
        const {id} = req.params;
    const task = await Task.findById(id)
    // res.send('get single task ')
    res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
 }
    
const update_task = async (req,res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id},
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if(!task){
            return(
                res.status(500).json(`no task found: ${id}`)
            )
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

//delete tasks
const delete_task =async(req,res)=>{
    try {
        const {id} =req.params
        const task = await Task.findByIdAndDelete(id)
      

        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).send('task deleted')
        
    } catch (error) {
        
        res.status(500).json({msg:error.message})
    }
}

module.exports = {
    create_task,
    get_tasks,
    get_single_task,
    update_task,
    delete_task
}