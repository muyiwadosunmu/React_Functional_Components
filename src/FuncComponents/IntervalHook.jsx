import React, { useEffect, useState } from "react";

const IntervalHook = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevState) => prevState + 1);
    /**Because setCount is taking note of the previous value we do not need dependency for this scenario */
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default IntervalHook;
