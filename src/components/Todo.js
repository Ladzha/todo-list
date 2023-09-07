import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({task, handleDone, handleDelete}) => {   

    const iconDelete = <FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}} />

  return (
    <div className='elementTodoList'>
        <p className={`${task.completed? "completed":""}`} onClick={()=>handleDone(task.id)}>{task.task}</p>
        <p className='icon' onClick={()=>handleDelete(task.id)}>{iconDelete}</p>
    </div>
  )
}

export default Todo