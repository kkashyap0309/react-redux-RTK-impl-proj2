import { createSlice } from "@reduxjs/toolkit";
//---------------------  Impelmenting Redux Tool Kit to achieive fuctionality -----------------//

const initialCounterState = { counter: 0, counterVisible: true };

//redux toolkit we have a method to create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.factor;
    },
    toggle(state) {
      state.counterVisible = !state.counterVisible;
    },
  },
});
const counterReducer = counterSlice.reducer;
export default counterReducer;
export const counterSliceActions = counterSlice.actions;
