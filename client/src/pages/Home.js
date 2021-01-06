import React, {Component} from "react";
import './Home.css';
import Uploader from "../components/Uploader";
import FacetDropdown from "../components/FacetDropdown";
import ReportBar from "../components/ReportBar";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import SubmitButton from '../components/SubmitButton';
import logo from '../images/logo_192x192.png';




 
class Home extends Component  {
    render(){
        return(

            <Container className="p-3">
            <Jumbotron>
            <h1 className="header">BravNado!</h1>
                <Image className="mx-auto d-block img-fluid unlock-icon"src={logo} rounded />
                <p className="header">
                    A Shark-nado of Bravo insights
                </p>
                
                <Uploader></Uploader>

                <p> Step 2: Select the facet: </p>
                <FacetDropdown></FacetDropdown>
                
                <p className="top-bumper"> Step 3: Select the type of visualization you want: </p>
                <ReportBar></ReportBar>

                <p className="top-bumper"> Step 4: Once you have done steps 1-3, hit it.</p>
                <SubmitButton></SubmitButton>
                
            </Jumbotron>
            </Container>

            
        );
    }
}

export default Home;