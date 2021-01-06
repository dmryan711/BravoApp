import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
class FacetDropdown extends Component {
    render(){
        return(
            <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* <Dropdown.Item eventKey="1">Facet 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Facet 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Facet 3</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
        )   
    }
}
export default FacetDropdown;
