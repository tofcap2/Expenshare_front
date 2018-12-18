import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Group from "./Component/Group";
import Index from "./Component/Index";

import {Container} from "reactstrap";


class App extends Component {
  render() {
    return (
        <Container>
            <BrowserRouter>
                <div>
                    <Route path="/group/:slug" component={Group} />
                    <Route path="/" exact component={Index} />
                </div>
            </BrowserRouter>
        </Container>
    );
  }
}

export default App;
