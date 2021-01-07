import {
    FILE_UPLOAD_CHANGE, FACET_SELECTION_CHANGE
  } from "../actions/types";
  const initialState = {
    fileUploadState : {
        fileName:"",
        isFileUploaded: false
    },
    facetSelectionState : {
      count:0,
      facets:[]
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
      case FACET_SELECTION_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        facetSelectionState:action.payload
      };
      default:
        return state;
    }
  }
