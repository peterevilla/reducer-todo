import React, { useReducer } from 'react';
import TodoForm from './components/Form'
import './App.css';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  
  console.log(state)

const addTask = (item) => {

    let taskAdded = {
      task: item,
      id: Date.now(),
      completed: false
    }

    dispatch({type: "ADD_TODO", payload: taskAdded})

  }


  return (
    <div className="App">
      <h1>Todo List</h1>
     <TodoForm addTask={addTask} deleteTask={() => { return dispatch({type: "DELETED_TODO"})}} />
     <TodoList  item={state} key={state.id} toggleCompleted={(id) => {return dispatch({type: 'COMPLETED_TODO', payload: id })}}/>
    </div>
  );
}


export default App;
