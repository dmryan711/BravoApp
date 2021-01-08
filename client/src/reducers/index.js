import { combineReducers } from "redux";
import fileUploadReducer from "./fileUploadReducer";
import facetSelectionReducer from "./facetSelectionReducer";
export default combineReducers({
  fileUpload : fileUploadReducer,
  facetSelection:facetSelectionReducer

});