import{
    FILE_UPLOAD_CHANGE
} from "./types";

export const changeFileUploadState = fileUploadState => dispatch => {
    console.log(fileUploadState);
    dispatch({
        type: FILE_UPLOAD_CHANGE,
        payload: fileUploadState
    });

}