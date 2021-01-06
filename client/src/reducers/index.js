import { combineReducers } from "redux";
import reportStateReducer from "./reportStateReducer";
export default combineReducers({
  reportState : reportStateReducer
});