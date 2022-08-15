// import React from "react";
// import Todo from "./components/Todo";

// function App() {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//       <Todo />
//     </div>
//   );
// }

// export default App;
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
