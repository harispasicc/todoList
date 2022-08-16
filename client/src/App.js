import React from "react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

export default App;
