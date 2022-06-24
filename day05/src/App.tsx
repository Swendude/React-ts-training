import { useState } from "react";
import Navbar from "./Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addTen, removeTen } from "./Store/balance/slice";
import { selectAmount } from "./Store/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectAmount);

  return (
    <div className="App">
      <Navbar balance={balance} />

      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(addTen());
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(removeTen());
        }}
      >
        Withdraw 10$
      </button>
    </div>
  );
}

export default App;
