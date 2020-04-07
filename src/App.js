import React, { useState } from 'react';
import Form from './components/Form'
import './App.css';
import data from './data'
import TodoList from './components/TodoList';
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  
const [ tasks, setTasks ] = useLocalStorage('data', data)


const addTask = (item) => {

    setTasks([...tasks, {
      task: item,
      id: Date.now(),
      completed: false
    }])

    
}


const deleteTask = () => {

  let noCompleted = tasks.filter(item => { return !item.completed})

  setTasks(noCompleted)

}

const toggleCompleted = (taskId) => {

  tasks.map(item => {

    let tasksCopy = [...tasks] 
    if(item.id === taskId) {

       tasksCopy[tasks.indexOf(item)] = { task: item.task, id: item.id, completed: !item.completed  } 

       return setTasks(tasksCopy)

    } else {

      return tasks

    }

    
  })

  console.log(tasks)
}

  return (
    <div className="App">
      <h1>Todo List</h1>
     <Form addTask={addTask} deleteTask={deleteTask}/>
     <TodoList toggleCompleted={toggleCompleted} item={tasks} key={tasks.id}/>
    </div>
  );
}

export default App;
