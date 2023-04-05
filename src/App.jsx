import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassMouse from "./ClassComponents/ClassMouse";
import FuncMouse from "./FuncComponents/FuncMouse";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <ClassMouse /> */}
      <FuncMouse />
    </div>
  );
}

export default App;
