import React, {Component} from 'react';
import Menu from "./Menu";
import {BrowserRouter, Route} from "react-router-dom";
import Expense from "./Expense/Expense";
import Dashboard from "./Dashboard/Dashboard";
import Person from "./Person/Person";

class Group extends Component {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Menu url={this.props.match.url}/>
                    <Route path={this.props.match.url} exact component={Dashboard}/>
                    <Route path={this.props.match.url + '/expense'} component={Expense}/>
                    <Route path={this.props.match.url + '/person'} render={props => <Person {...props} slug={this.props.match.params.slug}/>}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default Group;