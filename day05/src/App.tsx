import { useState } from "react";
import Navbar from "./Components/NavBar";
import { useSelector } from "react-redux";
import { change } from "./Store/balance/slice";
import { selectAmount } from "./Store/selectors";
import { useAppDispatch } from "./Store";

function App() {
  const dispatch = useAppDispatch();
  const balance = useSelector(selectAmount);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div className="App">
      <Navbar balance={balance} />

      <p>Balance: {balance}$</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseFloat(e.target.value))}
      />
      <button onClick={(e) => dispatch(change(inputValue))}>change</button>
    </div>
  );
}

export default App;
