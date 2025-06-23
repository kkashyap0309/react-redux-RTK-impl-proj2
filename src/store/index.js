import { createSlice } from "@reduxjs/toolkit";

//configure store is use to assigne the reduce to redux store when using redux toolkit
import { configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = { isAuthenticated: false, user: "" };
const authSlice = createSlice({
  name: "authenticator",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.activeUser;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
export const counterSliceActions = counterSlice.actions;
export const authSliceActions = authSlice.actions;
