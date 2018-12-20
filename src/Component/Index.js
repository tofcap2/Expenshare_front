import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Button, Container, Input, InputGroup} from "reactstrap";


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { slug: "", sharegroup: null };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ slug: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost/dcdev/Expenshare/expenshare_back/public/sharegroup/', {
            method: 'POST',
            body: JSON.stringify({ slug: this.state.slug })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouveau groupe créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création du groupe'))
        ;
    }

    handleOpen(event) {
        event.preventDefault();
        fetch('http://localhost/dcdev/Expenshare/expenshare_back/public/sharegroup/' + this.state.slug)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ sharegroup: JSON.parse(data) });
            })
            .catch(err => alert('Ce groupe n\'existe pas !'))
        ;
    }

    render() {

        if (this.state.sharegroup) {
            return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
        }

        console.log(this.props.group);

        return (
            <div>
                <Container className="indexContain">
                    <h1 className="indexTitle">Expenshare</h1>
                    <h2 className="indexSubtitle">Saisissez l'identifiant de votre groupe</h2>
                    <InputGroup>
                        <Input className="indexInput col-md-6 m-0 m-auto" type="text" value={this.state.slug} onChange={e => this.handleChange(e)} placeholder="Identifiant du groupe"/>
                    </InputGroup>
                    <div className="indexButton">
                        <Button className="m-2 px-4 btn-lg btn-warning" onClick={e => this.handleCreate(e)}>Créer</Button>
                        <Button className="m-2 px-4 btn-lg btn-success" onClick={e => this.handleOpen(e)}>Ouvrir</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Index;