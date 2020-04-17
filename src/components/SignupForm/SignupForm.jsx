import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/user-api';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userAPI.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="signupFormOuterBorder">
      <div className="signupFormBorder">
      <div className="signupForm">
        <header className="signupHeader">Sign Up</header><br></br>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input 
              className="form-control"
              type="text"
              placeholder="Name" 
              value={this.state.name} 
              name="name" 
              onChange={this.handleChange} 
            />
          </div><br></br>
          <div>
            <input 
              className="form-control"
              type="email"
              placeholder="Email" 
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange}
            />
          </div><br></br>
          <div>
            <input 
              className="form-control"
              type="password" 
              placeholder="Password" 
              value={this.state.password} 
              name="password" 
              onChange={this.handleChange} 
            />
          </div><br></br>
          <div className="form-group">
            <input 
              className="form-control"
              type="password" 
              placeholder="Confirm Password" 
              value={this.state.passwordConf} 
              name="passwordConf" 
              onChange={this.handleChange} 
            />
          </div><br></br>
          <div>
            <button 
              className="signupBtn" 
              disabled={this.isFormInvalid()}       
            >
              Sign Up
            </button>
            &nbsp;&nbsp;
            <br></br><br></br>
            <Link to='/' className="cancelBtn">Cancel</Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default SignupForm;