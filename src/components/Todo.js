import React from 'react'

const Todo = ({text,todo,todos,setTodos}) =>{

    //events
   function deleteHandler() {
        const result = (todos.filter((el) => {
            return el.id !== todo.id;
        }));
        setTodos(result);
        //   console.log(todo);
    }
    
 const completeHandler = () =>{
    const result = (todos.map(item=>{
        if(item.id === todo.id){
            return{
                ...item,completed: !item.completed
            }
        }
        return item;
    }))

    setTodos(result);

 };

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className='fas fa-check'></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}


export default Todo;  