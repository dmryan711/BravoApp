import {
    REPORT_STATE_CHANGE
  } from "../actions/types";
  const initialState = {
    report : {
        type:1
    }
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case REPORT_STATE_CHANGE:
      console.log(action.payload);

        return {
          ...state,
          report: action.payload
        };
      default:
        return state;
    }
  }