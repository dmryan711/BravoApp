import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
class Uploader extends Component {
    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Step 1: Upload Bravo Dump" />
                </Form.Group>
            </Form>
        )   
    }
}
export default Uploader;
