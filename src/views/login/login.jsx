import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Login extends Component {
  render() {
    return (
        <div>
          <h2>Welcome to Login Page</h2>
            <Link to='/app'>Open Dashboard</Link>
        </div>
    );
  }
}

export default Login;