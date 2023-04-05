import React, { useEffect, useState } from "react";

/**useEffect */
const FuncCounter = () => {
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default FuncCounter;
