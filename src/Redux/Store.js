import SearchReducer from "./SearchReducer";
import TypeReducer from "./TypeReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  search: SearchReducer,
  type: TypeReducer,
};
const store = configureStore({
  reducer,
});
export default store;
