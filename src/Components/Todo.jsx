import React, { useState, useRef, useEffect } from "react";
import "./CSS/Todo.css";
import "./CSS/TodoItem.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const ADD = () => {
    setTodos([...todos, { no: count, text: inputRef.current.value, display: "", completed: false }]);
    setCount(count + 1);
    inputRef.current.value = "";
  };

  const toggleCompleted = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return 
      ;
    });
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };
  const deleteTodoGreen = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder="Add Your Task" className="todo-input" />
        <div onClick={ADD} className="todo-add-btn">
          ADD
        </div>
      </div>
      <div className="Box"></div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <div key={index} className="todo-item">
            <span>{item.no}</span>
            <span className={`text-st ${item.completed ? "completed" : ""}`} onClick={() => toggleCompleted(index)}>
              {item.text}
            </span>
            <div className="todoitems">
              <div className="todoitems-container" onClick={() => toggleCompleted(index)}>
                {/* <img src={item.completed ? tick : not_tick} alt={item.completed ? "ticked" : "not ticked"} /> */}
                {/* <div className="todoitems-text">{item.text}</div> */}
              </div>
              <button className="St-Y"  > Y </button>
              <button className="St-N" onClick={() => deleteTodo(index)}> N </button>
              {/* <img className="todoitems-cross-icon" src={cross} alt="cross" onClick={() => deleteTodo(index)} /> */}
            </div>
          </div>
        ))}  
      </div>
    </div>
  );
};

export default Todo;
