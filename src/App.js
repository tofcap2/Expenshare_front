import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Expense from './Component/Expense';
import {Route} from "react-router-dom";
import {Container} from "reactstrap";
import Person from "./Component/Person";
import Menu from "./Component/Menu";


class App extends Component {
  render() {
    return (
        <Container>
          <Menu/>
        <Route path="/person" component={Person}/>
        <Route path="/expense" component={Expense}/>

        </Container>

    );
  }
}

export default App;
