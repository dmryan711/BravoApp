import React,{Component} from "react";
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
// import FacetSelection from './FacetSelection';
import {facetSelectionChange} from '../actions/facetSelectionChange';
class FacetDropdown extends Component {
    handleClick = value => {
       
        
        //<FacetSelection name = value></FacetSelection>
        this.props.facetSelectionChange(
            {
                facet : value
            }
        )
    }
   
    render(){
        console.log(this.props.facetSelection);
        return(

            <Dropdown>
                {this.props.facetSelection ? 
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.props.facetSelection}
                    </Dropdown.Toggle> 
                     : 
                    <Dropdown.Toggle id="dropdown-basic">
                    "Select a Facet"
                    </Dropdown.Toggle>
                     
                }
                 
                    
                    <Dropdown.Menu>
                    {this.props.facets && this.props.facets.map(facet => (
                        <Dropdown.Item onClick={()=>{this.handleClick(facet)}}key = {facet} eventKey={facet}>{facet}
                        </Dropdown.Item>

                    ))}
                    </Dropdown.Menu>
                </Dropdown>
        )   
}
}

const mapStateToProps = (state) => {
    return {
      facets: state.fileUpload.facetSelectionState.facets,
      facetSelection: state.facetSelection.facetSelection.facet
    };
  };

       
     


export default connect(mapStateToProps,{facetSelectionChange})(FacetDropdown);

