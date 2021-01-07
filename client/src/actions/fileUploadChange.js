import{
    FILE_UPLOAD_CHANGE, FACET_SELECTION_CHANGE
} from "./types";

export const changeFileUploadState = fileUploadState => dispatch => {
    console.log(fileUploadState);
    dispatch({
        type: FILE_UPLOAD_CHANGE,
        payload: fileUploadState
    });

}

export const changeFacetState = facets => dispatch => {
    console.log(facets);
    dispatch({
        type: FACET_SELECTION_CHANGE,
        payload: facets
    });

}