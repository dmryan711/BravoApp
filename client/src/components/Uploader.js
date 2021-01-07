import React, { Component } from "react";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import {changeFileUploadState,changeFacetState} from '../actions/fileUploadChange';

import axios from 'axios';

class Uploader extends Component {

    uploadFileToServer = (file) => {
        axios.post("/api/files/upload",file)

        .then(res =>{
            console.log(res.data);
            this.props.changeFileUploadState(
                {
                    fileName:file.name,
                    isFileUploaded: true
                }
            );

            this.props.changeFacetState(
                {
                    count:res.data.facets.length ,
                    facets: res.data.facets
                }
            );
        })
        .catch(err =>{
            console.log(err)
        });
    }

    fileUploaded = e => {
        console.log(e.target.files[0]);
        this.uploadFileToServer(e.target.files[0]);
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
export default connect(null,{changeFileUploadState,changeFacetState})(Uploader);