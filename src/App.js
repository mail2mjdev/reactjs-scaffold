import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import Login from "./layouts/login/login"
import Dashboard from "./layouts/dashboard/dashboard"

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/app" component={Dashboard} />
    </Router>
  );
}

export default App;
