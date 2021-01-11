import { combineReducers } from "redux";
import fileUploadReducer from "./fileUploadReducer";
import facetSelectionReducer from "./facetSelectionReducer";
import reportStateReducer from "./reportStateReducer";
export default combineReducers({
  fileUpload : fileUploadReducer,
  facetSelection:facetSelectionReducer,
  report:reportStateReducer

});