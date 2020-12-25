import React from 'react';
import Todo from './Todo';


const TodosList = ({todos,setTodos,filteredTodos}) => {
  
    return (
        <div className="todo-container">
          <ul className="todo-list">
            {
              filteredTodos.map(todo =>(
                 <Todo 
                  setTodos={setTodos} 
                  todos={todos}
                  todo={todo}
                  key={todo.id}
                  text={todo.text}
                  filteredTodos={todo}
                  />
              ))
            }
          </ul>
      </div>
    )
}

export default TodosList
 