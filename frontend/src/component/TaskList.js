import {useState, useEffect} from 'react'
import Form from './Form'
import Task from './Task';
import axios from 'axios';
import {URL} from '../App'
import loadingIMG from './asset/loading.gif'

const TaskList = () => {
  const [formData, setFormData] = useState({name:''})
const {name} = formData;
const [tasks,setTasks] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [taskID, setTaskID] = useState('');
const [editing, setediting] = useState(false)



 // get single taks

 const get_singleTask = async (task) =>{
    setFormData({name: task.name});
    setTaskID(task._id);
    setediting(true)
 }


// update a task
const update_Task = async (e) =>{
  // e.preventDefault()
 
  try {
    await axios.put(
      `${URL}/api/tasks/${taskID}`, formData
    )
  setFormData({...formData, name:""})
 
  get_tasks()
  } catch (error) {
    alert(error.message)
  }
  }

//handle input change
  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

 
//delete Task 
const delete_task = async (id) =>{
  try {
    await axios.delete(`${URL}/api/tasks/${id}`)
    get_tasks()
    alert('Task Deleted')
  } catch (error) {
    alert(error.message)
  }
}

  //get tasks
  const get_tasks = async () =>{
    setIsLoading(true)
    try {
      const {data} = await axios.get(`${URL}/api/tasks`)
      setTasks(data)
      setIsLoading(false)
    // console.log(response)
    } catch (error) {
      alert(error.message)
   
      
    }
  }
   useEffect(() =>{
    get_tasks()
   },[])

  // create task 
  const create_task = async (e) =>{
e.preventDefault();
// console.log(formData)
try {
  await axios.post(`${URL}/api/tasks`, formData )
  alert('task added succesfully')
} catch (error) {
  alert(error.message)
}
  }
  return (
    <div>
       <h1 className='--center-all --text-purple'>MANAGER</h1> 
       <div className="--flex-between --pb">
          <h3>
            <b>Total Tasks:</b> 0
          </h3>
          <h3>
            <b>Completed Tasks:</b> 0
          </h3>
        </div>
        {
          isLoading &&(
            <div className='--flex-center'>
              <img src={loadingIMG}/>
            </div>
          )
        }{
          !isLoading && tasks.length === 0 ? (
            <p >No Task Found, Add  A Task </p>
          ):(<>
            {tasks.map((task,index) =>{
      return(

            <Task  
            index={index} 
            task={task}
            delete_task={delete_task}
            get_singleTask={get_singleTask}
                  // editing={editing}
                  update_Task={update_Task}/>
          )
        })}
        </>)
        }
       
      
       
      
       <Form name={name} handleInputChange={handleInputChange} create_task={create_task}/>
       
    </div>
  )
}

export default TaskList