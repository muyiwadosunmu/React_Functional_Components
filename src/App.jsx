import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HookCounterWithArrays from "./FuncComponents/HookCounterWithArrays";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HookCounterWithArrays />
    </div>
  );
}

export default App;
