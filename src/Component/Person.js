import React, {Component} from 'react';
import Col from "react-bootstrap/es/Col";

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {person:[]}
    }

    componentDidMount() {
        fetch('http://localhost/dcdev/Expenshare/expenshare_back/public/person',{
            method:'GET',
            headers: {
                'X-Requested-With' : 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({person:data}))
        ;

    }

    render() {

        console.log(this.props.person);

        let person = <div>Chargement en cours</div>;

        if (this.state.person.length > 0) {
            person = this.state.person.map(person => <Col key={person.id}>{person.firstname + ' ' + person.shareGroup.slug}</Col>);
        }

        return (
            <React.Fragment>
                <h1>Personnes</h1>
                {person}
            </React.Fragment>

        );
    }
}

export default Person;