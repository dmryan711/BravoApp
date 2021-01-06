import {
    REPORT_STATE_CHANGE
   } from "../actions/types";
   const initialState = {
     reportState : {}
   };

   export default function(state = initialState, action) {
     switch (action.type) {
       case REPORT_STATE_CHANGE:
       console.log(action.payload);
         return {
           ...state,
           style: action.payload
         };
       
       default:
         return state;
     }
    }
