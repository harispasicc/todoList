import React, { useEffect, useState } from "react";
// import { listTasks } from "../../api/todo";
import { remove, updateTask } from "../../api/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ListItem() {
  const [tasks, setTasks] = useState([]);
  const [isCompleted, setIsCompleted] = useState();

  const completed = () => {
    setIsCompleted(!isCompleted);
    updateTask(tasks._id, !isCompleted);
  };

  useEffect(() => {
    axios
      .get("http://localhost:44300/api/todos")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="todo">
      <form className="form">
        <div className="todo-listItems">
          {tasks.map((t, index) => (
            <div
              key={index}
              className={isCompleted ? "todo-item complete" : "todo-item"}
            >
              <p
                key={t._id}
                className="todo-content"
                onClick={() => completed(t._id)}
              >
                {t.text}
              </p>
              <button className="delete-item">
                <FontAwesomeIcon
                  onClick={() => {
                    remove(t._id);
                  }}
                  icon={faTrash}
                />
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default ListItem;
