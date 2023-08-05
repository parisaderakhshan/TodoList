import React from "react";
import TextField from "@mui/material/TextField";
import "./Todo.css";
import { Button } from "@mui/material";
const Todo = () => {
  return (
    <div className="todo">
      <div className="container">
        <div className="title">
          <h1>Todo list</h1>
        </div>
        <div className="input">
          <TextField
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
            className="btn_add"
            variant="contained"
            primary1="blue"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
