import {
    FILE_UPLOAD_CHANGE
  } from "../actions/types";
  const initialState = {
    fileUploadState : {
        fileName:"",
        isFileUploaded: false
    }
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case FILE_UPLOAD_CHANGE:
      console.log(action.payload);
        return {
          ...state,
          fileUploadState: action.payload
        };
      default:
        return state;
    }
  }
