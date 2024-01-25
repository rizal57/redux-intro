import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/sliceAccount";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});

export default store;
