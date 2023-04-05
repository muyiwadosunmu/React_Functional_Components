import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HookCounterWithObjects from "./FuncComponents/HookCounterWithObjects";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HookCounterWithObjects />
    </div>
  );
}

export default App;
