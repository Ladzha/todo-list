import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoWrapper = (props) => {

const [todos, setTodos] =useState([])

const addTodo=(todo)=>{
    if(todo){
        setTodos([...todos, {id:new Date().toLocaleString(), task:todo, completed:false}])
    }
    console.log(todos)
}


const handleDone =(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo, completed: !todo.completed}:todo))
}

const handleDelete =(id)=>{
    setTodos(todos.filter(todo=> todo.id!==id))

}

  return (
    <div className='todoWrapper'>
        <h1>You can do it!</h1>
        <TodoForm addTodo={addTodo}/>

        {todos.map((todo, index)=>(
            <Todo task={todo} key={index} handleDone={handleDone} handleDelete = {handleDelete} className = 'elementTodoList'/>
        ))}
    </div>
  )
}

export default TodoWrapper