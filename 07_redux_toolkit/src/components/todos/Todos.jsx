import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { removeTodo } from '../../features/todo/todoSlice';

import {Todo}from "../index"

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  const removeTodoItem = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} id={todo.id} text={todo.text} removeTodo={removeTodoItem}/>
        )
      })}
    </div>
  )
}

export default Todos