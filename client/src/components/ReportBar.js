import React, {Component} from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
// import "bootstrap/dist/css/bootstrap.min.css";
class ReportBar extends Component {
//   const [value, setValue] = React.useState(2);
//   const handleChange = val => setValue(val);
    render(){
        return(
            <ToggleButtonGroup
                name="value"
                type="radio"
                value={value}
                onChange={handleChange}
            >
                <ToggleButton value={1}>Word Bubble</ToggleButton>
                <ToggleButton value={2}>Bar Chart</ToggleButton>
                <ToggleButton value={3}>Potatoe Report</ToggleButton>
            </ToggleButtonGroup>
        )
    }
}

export default ReportBar;
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


  
  