import React from "react";
import Todo from '../components/Todo'



const TodoList = props => {

  
    return (
      <div>
        {props.item.map( item => (
            <Todo key={item.id} item={props.item} toggleComplete ={props.toggleCompleted} />
        ))}
      </div>
    );
  
        }


export default TodoList;