import{
    REPORT_STATE_CHANGE
} from "./types";

export const reportStateChange = reportType => dispatch => {
    console.log(reportType);
    dispatch({
        type: REPORT_STATE_CHANGE,
        payload: reportType
    });

}