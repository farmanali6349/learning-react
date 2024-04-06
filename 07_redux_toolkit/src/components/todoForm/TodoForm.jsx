import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../../features/todo/todoSlice"

function TodoForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputText))
    setInputText("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Enter Todo'
            value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
        />

        <input 
            type="submit"
            value="Add"
        />
    </form>
  )
}

export default TodoForm