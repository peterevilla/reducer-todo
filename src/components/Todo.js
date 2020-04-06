import React from "react";

const Todo = props => {


  return (
    <div className={`task${props.item.completed ? " completed" : ""}`}
    onClick={e => props.toggleCompleted(props.item.id)}>
      <div className="item-box"><p className="task-item">{props.item.task}</p></div>
    </div>
  );
};

export default Todo;