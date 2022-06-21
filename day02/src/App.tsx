import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

function App() {
  // React re-rendered wanneer een useState veranderd
  const [counter, setCounter] = useState<number>(0);
  const [smileys, setSmileys] = useState<string[]>([]);
  return (
    <div className="App">
      <Counter count={counter} />
      <div>
        <button onClick={(event) => setCounter(counter + 1)}>+</button>
        <button onClick={(event) => setCounter(counter - 1)}>-</button>
      </div>
      <br />
      {smileys.map((smiley) => (
        <span>{smiley}</span>
      ))}
      <button
        onClick={(event) => {
          setSmileys([...smileys, "😊"]);
        }}
      >
        😊
      </button>
    </div>
  );
}

export default App;
