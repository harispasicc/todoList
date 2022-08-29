import axios from "axios";
import config from "../config/config";

const apiUrl = config.apiPath;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const listTasks = async () => {
  try {
    const res = await axios.get(apiUrl + "/api/todos");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const insertTask = text => {
  try {
    return axios.post(apiUrl + "/api/todos", text);
  } catch (error) {
    console.log(error);
  }
};

const updateTask = (id, isCompleted) => {
  axios
    .put(apiUrl + `/api/todos/${id}`, isCompleted, {
      headers,
    })
    .then(response => response.data)
    .catch(reason => {
      console.log(reason);
    });
};

const remove = async id => {
  try {
    const res = await axios.delete(apiUrl + `/api/todos/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { insertTask, listTasks, remove, updateTask };
