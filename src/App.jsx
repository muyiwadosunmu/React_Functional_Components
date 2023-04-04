import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassCounter from "./ClassComponents/ClassCounter";
import FuncCounter from "./FuncComponents/FuncCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ClassCounter />
      <FuncCounter />
    </div>
  );
}

export default App;
