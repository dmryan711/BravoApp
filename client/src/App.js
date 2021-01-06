import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./store";
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Home></Home>
      </Provider>
      
    );
  }
}

export default App;

