import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import Form from "./Form";


class Expense extends Component {

    constructor(props) {
        super(props);
        this.state = {expense:[]}
    }

    componentDidMount() {
        fetch('http://localhost/dcdev/Expenshare/expenshare_back/public/expense',{
            method:'GET',
            headers: {
                'X-Requested-With' : 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({expense:data}))
        ;
    }


    render() {


        return (
            <div>
                <h2>Dépenses</h2>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une dépense</NavLink>
                <Route path={this.props.match.url + '/add'} component={Form}/>
            </div>

        );
    }
}

export default Expense;