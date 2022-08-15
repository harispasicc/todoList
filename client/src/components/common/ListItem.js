import React, { useEffect, useState } from "react";
// import { listTasks } from "../../api/todo";
import { remove, updateTask } from "../../api/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ListItem() {
  const [tasks, setTasks] = useState([]);

  const completeTodo = id => {
    let updatedTodos = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTodos);
  };

  // const newInput = () => {
  //   if (newTask) {
  //     insertTask({ text: newTask });
  //   }
  // };
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
          {tasks.map(t => (
            <div key={t._id} className="todo-item">
              <p className="item-content">{t.text}</p>
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
