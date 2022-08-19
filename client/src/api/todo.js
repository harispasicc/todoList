import axios from "axios";
// import config from "../config/config";

// const apiUrl = config.apiPath;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const listTasks = async () => {
  try {
    const res = await axios.get("http://localhost:44300/api/todos");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const insertTask = text => {
  try {
    return axios.post("http://localhost:44300/api/todos", text);
  } catch (error) {
    console.log(error);
  }
};

// const updateTask = (id, isCompleted) => {
//   axios
//     .put(`http://localhost:44300/api/todos/${id}`, isCompleted, {
//       headers,
//     })
//     .then(response => response.data)
//     .catch(reason => {
//       console.log(reason);
//     });
// };

const remove = async id => {
  try {
    const res = await axios.delete(`http://localhost:44300/api/todos/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { insertTask, listTasks, remove };
