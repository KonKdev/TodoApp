import React, {useState, useEffect} from 'react';
import './App.css';
//importing Components
import Form from "./components/Form";
import TodosList from './components/TodoList';

function App() {
 
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status,setStatus] = useState('all');
const [filteredTodos,setFilteredTodos] = useState([]);
 
useEffect(() => {
   filterHandler();
}, [todos,status]);

//Functions
const filterHandler = () =>{
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
  case 'uncompleted':
    setFilteredTodos(todos.filter(todo => todo.completed === false))
    break;
  default:
    setFilteredTodos(todos);
    break;
}
}
 
  return (
    <div className="App">
      <header>
          <h1>Ed's Todo List</h1>
     </header>
     <Form 
     todos={todos}
     setTodos={setTodos}  
     setInputText={setInputText}  
     inputText={inputText}
     setStatus={setStatus}
     />

     <TodosList  
     filteredTodos={filteredTodos}
     todos={todos} 
     setTodos={setTodos}
     />
     
    </div>
  );
}

export default App;
