import React, { useState } from 'react';
import Form from './components/Form'
import './App.css';
import data from './data'
import TodoList from './components/TodoList';

function App() {
  
const [ tasks, setTasks ] = useState(data)


const addTask = (item) => {

    setTasks([...tasks, {
      task: item,
      id: Date.now(),
      completed: false
    }])

    console.log(tasks)
}

const toggleCompleted = (item) => {

    tasks.map(e => {
      
      if(e.id === item) {

          setTasks({...e, completed: !e.completed})
      }
    })
}

  return (
    <div className="App">
      <h1>Todo List</h1>
     <Form addTask={addTask}/>
     <TodoList toggleCompleted={toggleCompleted} item={tasks}/>
    </div>
  );
}

export default App;
