import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom"

import Pageone from '../../views/pageone/pageone';
import Pagetwo from '../../views/pagetwo/pagetwo';
class Dashboard extends Component {
  render() {
    return (
        <div>
            <h2>Welcome to Dashboard</h2>
            <Link to="/app/pageone">Page One</Link> <Link to="/app/pagetwo">Page Two</Link>
            <div>
                <Switch>
                    <Route exact path="/app/pageone" component={Pageone} />
                    <Route path="/app/pagetwo" component={Pagetwo} />
                </Switch>
            </div>
        </div>
    );
  }
}

export default Dashboard;