import React, { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>0</div>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
