import React from 'react'

function Todo({id, text, removeTodo}) {

  const handleClick = () => {
    removeTodo(id)
  }
  return (
    <div className="todo">
      <input type="text"
        value={text}
        disabled
      />

      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Todo