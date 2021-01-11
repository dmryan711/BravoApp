import React, {Component} from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import {connect} from "react-redux";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Container } from "react-bootstrap";
import {reportStateChange} from "../actions/reportStateChange";
// import "bootstrap/dist/css/bootstrap.min.css";
class ReportBar extends Component {
  
    handleChange = value => {
        this.props.reportStateChange(
            {
                type : value
            }
        ) 
    }    

    render(){
        return(
            <Container>
                {this.props.isFileUploaded && this.props.facets && this.props.facetSelection ?
                <ToggleButtonGroup
                name="report"
                type="radio"
                value={this.props.reportType}
                onChange={this.handleChange}
                >
                    <ToggleButton value={1}>Word Bubble</ToggleButton>
                    <ToggleButton value={2}>Bar Chart</ToggleButton>
                    <ToggleButton value={3}>Potatoe Report</ToggleButton>
            </ToggleButtonGroup>
            :

                <ToggleButtonGroup
                    name="report"
                    type="radio"
                >
                    <ToggleButton disabled = "true">Word Bubble</ToggleButton>
                    <ToggleButton disabled = "true">Bar Chart</ToggleButton>
                    <ToggleButton disabled = "true">Potatoe Report</ToggleButton>
                </ToggleButtonGroup>
                
            }
            </Container>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFileUploaded: state.fileUpload.fileUploadState.isFileUploaded,
        facets: state.fileUpload.facetSelectionState.facets,
        facetSelection: state.facetSelection.facetSelection.facet,
        reportType : state.report.report.type
    };
};

export default connect(mapStateToProps,{reportStateChange})(ReportBar);
// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// class ReportBar extends Component {

   
//     render(){
//         return(
//             <fieldset>
//             <Form.Group as={Row}>
               
//                 <Col sm={12}>
//                     <Form.Check
//                     type="radio"
//                     label="Word Bubble"
//                     name="formHorizontalRadios"
//                     id="wordBubbleRadio"
//                     />
//                     <Form.Check
//                     type="radio"
//                     label="Bar Chart"
//                     name="formHorizontalRadios"
//                     id="barChartRadio"
//                     />
//                     <Form.Check
//                     type="radio"
//                     label="Potatoe"
//                     name="formHorizontalRadios"
//                     id="potatoeRadio"
//                     />
//                 </Col>
//             </Form.Group>
//             </fieldset>
//         )   
//     }
// }
// export default ReportBar;


  
  