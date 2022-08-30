import React, { useEffect, useState } from "react";
import { remove, updateTask, listTasks } from "../../api/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ListItem() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http://localhost:44300/api/todos");
        setTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [tasks]);

  const completed = id => {
    if (tasks) {
      updateTask(id, { isCompleted: !tasks.isCompleted });
    }
  };

  return (
    <div className="todo">
      <form className="form">
        <div className="todo-listItems">
          {tasks.map((t, index) => (
            <div
              key={index}
              className={t.isCompleted ? "todo-item complete" : "todo-item"}
            >
              <p
                key={t._id}
                className="todo-content"
                onClick={() => {
                  completed(t._id);
                }}
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
