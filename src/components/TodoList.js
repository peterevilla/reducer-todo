import React from "react";
import Todo from '../components/Todo'



const TodoList = props => {

  
    return (
      <div>
        {props.item.map( ele => (
            <Todo key={ele.id} item={ele} toggleCompleted={props.toggleCompleted} />
        ))}
      </div>
    );
  
        }


export default TodoList;