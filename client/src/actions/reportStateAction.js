import{
    REPORT_STATE_CHANGE
} from "./types";

export const changeReportState = reportState => dispatch => {
    console.log(reportState);
    dispatch({
        type: REPORT_STATE_CHANGE,
        payload: reportState
    });

}