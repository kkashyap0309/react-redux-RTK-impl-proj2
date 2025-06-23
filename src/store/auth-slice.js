import { createSlice } from "@reduxjs/toolkit";

//---------------------  Impelmenting Redux Tool Kit to achieive fuctionality -----------------//
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

const authReducer = authSlice.reducer;
export default authReducer;
export const authSliceActions = authSlice.actions;
