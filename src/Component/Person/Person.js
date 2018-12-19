import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {NavLink, Route} from "react-router-dom";
import FormPerson from "./FormPerson";

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {person:[]};
    }

    componentDidMount() {
        fetch('http://localhost/dcdev/Expenshare/expenshare_back/public/person/group/' + this.props.slug,{

        })
            .then(response => response.json())
            .then(data => this.setState({person:data}))
        ;
    }


    render() {

        let person = <tbody><tr><td>Chargement en cours</td></tr></tbody>;

        if (this.state.person.length > 0) {
            person = this.state.person.map(person =>

                <tbody key={person.id}>
                <tr>
                    <th scope="row">{person.id}</th>
                    <td>{person.firstname + ' ' + person.lastname}</td>
                    <td>{person.expenses.length}</td>
                    <td>{person.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)}</td>
                </tr>
                </tbody>

            );
        }

        return (
            <React.Fragment>
                <h1>Personnes</h1>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une personne</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <FormPerson {...props} slug={this.props.slug}/>}/>

                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Montant</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    {person}
                </Table>
            </React.Fragment>
        );
    }
}

export default Person;