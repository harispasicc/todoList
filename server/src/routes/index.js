import todo from "./todo.router";

export default app => {
  app.use("/", todo);
};
