import{
    FACET_SELECTION_CHANGE
} from "./types";

export const facetSelectionChange = facet => dispatch => {
    console.log(facet);
    dispatch({
        type: FACET_SELECTION_CHANGE,
        payload: facet
    });

}