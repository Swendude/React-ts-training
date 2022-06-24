import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: initialState,
  reducers: {
    addTen: (state) => {
      state.amount = state.amount + 10;
    },
    removeTen: (state) => {
      state.amount = state.amount - 10;
    }
  }
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { addTen, removeTen } = balanceSlice.actions;

export default balanceSlice.reducer;
