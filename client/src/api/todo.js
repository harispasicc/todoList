import axios from "axios";
// import config from "../config/config";

// const apiUrl = config.apiPath;

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

// const updateTask = (id, path, data, callback, isCompleted) => {
//   axios
//     .put(`${apiUrl}/${path}/${id}`, data, { headers })
//     .then(response => callback(response.data))
//     .catch(reason => {
//       console.log(reason);
//       callback(false);
//     });
// };

// const updateTask = async (id, isCompleted, path) => {
//   try {
//     const res = axios.put(`${apiUrl}/${path}/${id}`, isCompleted);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

const updateTask = (id, isCompleted) => {
  try {
    return axios.put(`http://localhost:44300/api/todos/${id}`, isCompleted);
  } catch (error) {
    console.log(error);
  }
};

const remove = async id => {
  try {
    const res = await axios.delete(`http://localhost:44300/api/todos/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { insertTask, listTasks, remove, updateTask };
