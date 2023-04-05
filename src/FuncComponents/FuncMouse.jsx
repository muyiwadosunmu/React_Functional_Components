import React, { useEffect, useState } from "react";

const FuncMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log(`useEffect called`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log(`Component unmounting code`);
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>
        Hooks X- {x} Y - {y}
      </h2>
    </div>
  );
};

export default FuncMouse;
