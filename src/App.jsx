import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassCounterOne from "./ClassComponents/ClassCounterOne";
import FuncCounter from "./FuncComponents/FuncCounter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FuncCounter />
      {/* <ClassCounterOne /> */}
    </div>
  );
}

export default App;
