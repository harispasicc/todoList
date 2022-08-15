import React, { useState, useRef, useEffect } from "react";
import { insertTask } from "../api/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import axios from "axios";

function AddTodo() {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const newInput = () => {
    if (newTask) {
      insertTask({ text: newTask });
    }
  };

  return (
    <div className="todo">
      <form className="form" onSubmit={e => newInput(e)}>
        <input
          type="text"
          placeholder="Add a Todo"
          ref={inputRef}
          onChange={e => {
            setNewTask(e.target.value);
          }}
          value={newTask}
        />
        <button type="submit" className="submitButton">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <div className="bottom" />
    </div>
  );
}

export default AddTodo;
