import React, { Component } from "react";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import {changeFileUploadState} from '../actions/fileUploadChange';
class Uploader extends Component {

    fileUploaded = e => {
        console.log("HI");
        this.props.changeFileUploadState(
            {
                fileName:e.target.files[0].name,
                isFileUploaded: true
            }
        );
    }

    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Step 1: Upload Bravo Dump" onChange={(e) => this.fileUploaded(e)} />
                </Form.Group>
            </Form>
        )   
    }
}
export default connect(null,{changeFileUploadState})(Uploader);