import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetching from "./FuncComponents/DataFetching";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}

export default App;
