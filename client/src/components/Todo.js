import React from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import Header from "./Header";
import List from "./common/List";

function Todo() {
  return (
    <div>
      <Header />
      <AddTodo />
      <List />
      <Footer />
    </div>
  );
}

export default Todo;
