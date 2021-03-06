import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  amount: 0
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.amount = state.amount + action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { change } = balanceSlice.actions;

export default balanceSlice.reducer;
