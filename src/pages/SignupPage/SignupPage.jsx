import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  state = {
    message: ''
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
      <div className="signuplogo"><img src="../../logo.png" alt=""/></div>
        <SignupForm {...this.props} updateMessage={this.updateMessage} className="signUpForm"/>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;