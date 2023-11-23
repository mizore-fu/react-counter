import React, { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };
  const decrementCount = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{count}</div>
      <Button text="+" handleClick={incrementCount} />
      <Button text="-" handleClick={decrementCount} />
    </div>
  );
}

export default App;
