import React from 'react'
import './Task.css';

import {MdOutlineDeleteForever,MdEditNote} from 'react-icons/md';


const Task = ({task, index, delete_task,get_singleTask}) => {

  return (
    <div className='task'>
        <p> {index +1} <b>{task.name}</b></p>
        <div className='task-icons'>
            
            <MdEditNote onClick={() =>get_singleTask(task)} />
            <MdOutlineDeleteForever onClick={() => delete_task(task._id)}/>
        </div>
       
    </div>
  )
}

export default Task