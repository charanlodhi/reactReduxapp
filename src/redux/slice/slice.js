import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increament: (state) => {
      state.counter += 1;
    },
    decreament: (state) => {
      state.counter -= 1;
    },
    increamentBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});
export const { increament, decreament, increamentBy } = slice.actions;
console.log(slice);
export default slice.reducer;
