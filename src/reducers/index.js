// Root Reducer
import { combineReducers } from "redux";
import bomReducer from "./bomReducer";

export default combineReducers({
  bom: bomReducer,
});
