import React, {Component} from 'react';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>

                <img src={require('./../../Chart.jpg')} alt="l"  className="image" width="500" height="400" />

            </div>
        );
    }
}

export default Dashboard;