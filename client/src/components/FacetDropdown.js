import React from "react";
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
const FacetDropdown =({facets}) => {
    
        return(
            <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {facets && facets.map(facet => (
                        <Dropdown.Item key = {facet} eventKey={facet}>{facet}</Dropdown.Item>
                    ))}
                    

                        {/* <Dropdown.Item eventKey="1">Facet 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Facet 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Facet 3</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
        )   
}


    

    // function mapStateToProps(state) {
    //     console.log(state) // state
    //     console.log(arguments[1]) // undefined
    //   }

      const mapStateToProps = (state) => {
        return {
          facets: state.fileUpload.facetSelectionState.facets
        };
      };


export default connect(mapStateToProps)(FacetDropdown);

//facets: state.fileUpload.facetSelectionState.facets
