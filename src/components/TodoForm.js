import React from 'react'
import { useState } from 'react'


const TodoForm = ({addTodo}) => {

    const [inputValue, setInputValue] =useState('')

    const handleChange = (event)=>{
        setInputValue(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        addTodo(inputValue)
        console.log(inputValue);
        setInputValue('')
    }
    
  return (
    <div>
        <form className = "todoForm" onSubmit={(event)=>handleSubmit(event)}>
        <input type="text" className='todoInput' value={inputValue} placeholder='Enter a new task' onChange={(event)=>handleChange(event)} />
        <button type='submit' className='todoButton'>Add Task</button>
    </form>
    </div> 

  )
}

export default TodoForm