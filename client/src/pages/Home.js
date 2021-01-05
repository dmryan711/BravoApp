import React, {Component} from "react";
import './Home.css';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';



 
class Home extends Component  {
    render(){
        return(

            <Container className="p-3">
            <Jumbotron>
            <h1 className="header">BravNato!</h1>
                <p className="header">
                    A Shark-nado of Bravo insights
                </p>
                
                     
                <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Step 1: Upload Bravo Dump" />
                    </Form.Group>
                </Form>

                <p> Step 2: Select the facet: </p>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Facet 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Facet 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Facet 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <p className="top-bumper"> Step 3: Select the type of visualization you want: </p>
                <ButtonToolbar className="custom-btn-toolbar">
                    <Button>Word Cloud</Button>
                    <Button>Bar Chart</Button>
                </ButtonToolbar>
                
            </Jumbotron>
            </Container>

            
        );
    }
}

export default Home;