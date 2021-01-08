import {
    FACET_SELECTION_CHANGE
  } from "../actions/types";
  const initialState = {
    facetSelection : {
        facet:""
    }
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case FACET_SELECTION_CHANGE:
      console.log(action.payload);
      console.log(state.facetSelection);


        return {
          ...state,
          facetSelection: action.payload
        };
      default:
        return state;
    }
  }