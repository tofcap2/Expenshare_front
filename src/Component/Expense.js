import React, {Component} from 'react';
import Col from "react-bootstrap/es/Col";

class Person extends Component {

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

        let expense = <div>Chargement en cours</div>;

        if (this.state.expense.length > 0) {
            expense = this.state.expense.map(expense => <Col key={expense.id}>{expense.amount}</Col>);
        }

        return (
            <React.Fragment>
                <h1>Dépenses</h1>
                {expense}
            </React.Fragment>

        );
    }
}

export default Person;