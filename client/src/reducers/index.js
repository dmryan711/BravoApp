import { combineReducers } from "redux";
import fileUploadReducer from "./fileUploadReducer";
export default combineReducers({
  fileUpload : fileUploadReducer
});