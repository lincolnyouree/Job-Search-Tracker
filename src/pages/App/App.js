import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import JobsSecretPage from '../JobsSecretPage/JobsSecretPage'
import * as jobAPI from '../../services/job-api';
import * as userAPI from '../../services/user-api';
import Job from '../../components/Job/Job'
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    jobs: null
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const jobs = await jobAPI.index();
    this.setState({ jobs });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to Job</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/job-secret' render={() => 
            userAPI.getUser() ? 
              <JobsSecretPage />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={() =>
            <Job />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
