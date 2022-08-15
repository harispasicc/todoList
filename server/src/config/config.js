require("dotenv").config();

module.exports = {
  mongo: process.env.DB || "mongodb://localhost:27017/todo-list",
  port: process.env.PORT || 44300,
};
