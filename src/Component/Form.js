import React, {Component} from 'react';


class App extends React.Component {
    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            fromChild: ''
        };
    }

    handleData(data) {
        this.setState({
            fromChild: data
        });
    }

    render() {
        return (
            <div>
                <InputFoo handlerFromParent={this.handleData} />
                <h5>Reçu par le parent :<br />{this.state.fromChild}</h5>
            </div>
        );
    }
}


class InputFoo extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: ''
        };
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.handlerFromParent(this.state.inputField);
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                           id="theInput"
                           value={this.state.inputField}
                           onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <h5>Composant enfant :<br />{this.state.inputField}</h5>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);