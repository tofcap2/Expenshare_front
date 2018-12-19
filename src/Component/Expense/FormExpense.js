import React, {Component} from 'react';
import {Form, Button, FormGroup, Input, Container, InputGroup} from "reactstrap";


class FormExpense extends Component {

    constructor(props) {
        super(props);
        this.state = { title: "", amount: "", person: "", firstname: "", lastname: "", category:""};
    }

    handleChangeT(event) {
        event.preventDefault();
        this.setState({ title: event.target.value});
    }

    handleChangeA(event) {
        event.preventDefault();
        this.setState({ amount: event.target.value });
    }

    handleChangeC(event) {
        event.preventDefault();
        this.setState({ category: event.target.value });
    }

    handleChangeP(event) {
        event.preventDefault();
        this.setState({ person: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost/dcdev/Expenshare/expenshare_back/public/expense/', {
            method: 'POST',
            body: JSON.stringify({ title: this.state.title, amount: this.state.amount, category: this.state.category, person:this.state.person })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouvelle dépense crée avec succès !');
            })
            .catch(err => alert('Erreur lors de la création de la dépense'))
        ;
    }
    render() {



        return (
            <div>
                <Container className="text-center mt-5 pt-4">
                    <h3 className="p-3 text-dark">Ajouter une personne au groupe {this.state.slug}</h3>
                    <Form className="m-0 m-auto">
                        <FormGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.title} onChange={e => this.handleChangeT(e)} placeholder="Libellé" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="text" value={this.state.amount} onChange={e => this.handleChangeA(e)} placeholder="Montant" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="select" value={this.state.amount} onChange={e => this.handleChangeC(e)} placeholder="Catégorie" />
                            </InputGroup>
                            <InputGroup>
                                <Input className="form-control form-control-lg col-md-6 m-0 m-auto text-center" type="select" value={this.state.amount} onChange={e => this.handleChangeP(e)} placeholder="Personne" />
                            </InputGroup>

                        </FormGroup>
                        <FormGroup className="text-center">
                            <Button onClick={e => this.handleCreate(e)} className="m-2 px-4 btn-lg btn-info">Ajouter</Button>
                        </FormGroup>
                    </Form>
                </Container>

            </div>
        );
    }
}

export default FormExpense;