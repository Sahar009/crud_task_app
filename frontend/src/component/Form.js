import React from 'react'
import './Task.css';

const Form = ({create_task, handleInputChange,name,editing,update_task }) => {
  return (
    <form className='task-form' onSubmit={editing ? update_task : create_task}>
        <input
        type='text'
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInputChange}

        />
        <button className='--btn --btn-primary' type='submit'>Add</button>

    </form>
  )
}

export default Form