import React from "react";
import TextField from "@mui/material/TextField";
import "./Todo.css";
import { Button } from "@mui/material";
import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (inputValue.length === 0) {
      alert("Please enter title");
    } else {
      todos.push({
        title: inputValue,
        id: Math.random() * 1000,
        completed: false,
      });
    }
    setInputValue("");
  };
  return (
    <div className="todo">
      <div className="container">
        <div className="title">
          <h1>Todo list</h1>
        </div>
        <div className="input">
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ height: 55 }}
            id="outlined-basic"
            label="Enter your task"
            variant="outlined"
            className="text_field"
          />
          <Button
            style={{
              height: 55,
              width: 100,
              marginLeft: 10,
              display: "flex",
              alignItems: "center",
              background: "A9DDF8",
            }}
            onClick={addTodo}
            className="btn_add"
            variant="contained"
            color="blue"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
