import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./components/Button";
import { BASE_URL } from "./constants";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/count`).then(({ data }) => {
      setCount(data.count);
    });
  }, []);

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
