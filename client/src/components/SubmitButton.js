import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";
class  SubmitButton extends Component {
    handleClick = () => {
        if(this.props.isFileUploaded && this.props.facets && this.props.facetSelection){
            console.log("File is uploaded and there are facets,facet selection has been made, and report is selected");
        }
    }
    render(){
        return (
            <Container>
                {this.props.isFileUploaded && this.props.facets && this.props.facetSelection ? 
                    <Button onClick = {this.handleClick}variant="primary" size="lg" block>
                        Submit Report
                    </Button>
                    :
                    <Button variant="secondary" size="lg" block disabled>
                        Submit Report
                    </Button>
                }

            </Container>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFileUploaded: state.fileUpload.fileUploadState.isFileUploaded,
        facets: state.fileUpload.facetSelectionState.facets,
        facetSelection: state.facetSelection.facetSelection.facet
    };
};

export default connect(mapStateToProps)(SubmitButton);