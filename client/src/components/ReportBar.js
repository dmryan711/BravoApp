import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
class ReportBar extends Component {
    render(){
        return(
            <ButtonToolbar className="custom-btn-toolbar">
                <Button>Word Cloud</Button>
                <Button>Bar Chart</Button>
            </ButtonToolbar>
        )   
    }
}
export default ReportBar;