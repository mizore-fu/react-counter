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

  const increaseCount = async () => {
    await axios.put(`${BASE_URL}/countup`);
    axios.get(`${BASE_URL}/count`).then(({ data }) => {
      setCount(data.count);
    });
  };

  const decreaseCount = async () => {
    await axios.put(`${BASE_URL}/countdown`);
    axios.get(`${BASE_URL}/count`).then(({ data }) => {
      setCount(data.count);
    });
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{count}</div>
      <Button text="+" handleClick={increaseCount} />
      <Button text="-" handleClick={decreaseCount} />
    </div>
  );
}

export default App;
