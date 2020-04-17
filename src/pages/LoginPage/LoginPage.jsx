import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import * as userAPI from '../../services/user-api';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userAPI.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
      <div className="loginlogo"><img src="../../logo.png" alt=""/> </div>
      <div className="loginFormOuterBorder">
      <div className="loginFormBorder">
      <div className="loginForm">
        <header className="loginHeader">Log In</header><br></br>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input 
              className="form-control-login"
              type="email" 
              placeholder="Email"
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange} 
            />
          </div><br></br>
          <div>
            <input 
              className="form-control-login"
              type="password"
              placeholder="Password" 
              value={this.state.pw} 
              name="pw" 
              onChange={this.handleChange} 
            />
          </div><br></br>
          <div>
            <button className="loginBtn">Log In</button>
            &nbsp;&nbsp;&nbsp;<br></br><br></br>
            <Link to='/' className="cancelBtn">Cancel</Link>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default LoginPage;