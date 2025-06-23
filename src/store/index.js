//configure store is use to assigne the reduce to redux store when using redux toolkit
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
