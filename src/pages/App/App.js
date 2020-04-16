import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import JobsSecretPage from '../JobsSecretPage/JobsSecretPage';
import * as jobAPI from '../../services/job-api';
import * as userAPI from '../../services/user-api';
import Job from '../../components/Job/Job';
import NavBar from '../../components/NavBar/NavBar';
import JobCard from '../../components/Job/JobCard';
import JobListPage from '../../pages/JobListPage/JobListPage';
import AddJobPage from '../../pages/AddJobPage/AddJobPage';
import EditJobPage from '../../pages/EditJobPage/EditJobPage';

class App extends Component {
  state = {
    user: userAPI.getUser(),
    jobs: []
  };

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null, jobs : [] });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
    this.componentDidMount();
    
  }

  async componentDidMount() {
    if (this.state.user) {
      const allJobs = await jobAPI.index();
      this.setState({ jobs : allJobs });

    }
  }

  handleAddJob = async newJobData => {
    const newJob = await jobAPI.create(newJobData);
    this.setState( {
      jobs: [...this.state.jobs, newJobData]
    }, () => this.props.history.push('/'));
  }

  handleDeleteJob = async id => {
    const deletedJob = await jobAPI.deleteOne(id);
    let newJobs = this.state.jobs;
    newJobs.splice(id, 1)
    this.setState(state => ({ 
      jobs: newJobs
    }))
  }

  handleUpdateJob = async (updatedJobData, idx, id) => {
    const updatedJob = await jobAPI.update(updatedJobData, idx);
    const newJobsArray = this.state.jobs.map(j => 
      j._id === id ? updatedJob : j
    );
    this.setState(
      {jobs: newJobsArray},
      () => this.props.history.push('/')
    );
  }

  render() {
    return (
      <div className="App">
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
          <Route exact path='/about' render={() => 
            userAPI.getUser() ? 
              <JobsSecretPage />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={({history, location}) =>
            <Job
              jobs={this.state.jobs}
              user={this.state.user}
              handleDeleteJob={this.handleDeleteJob}
              history={history}
              location={location}
            />
          }/>
          <Route exact path='/addjob' render={() =>
            <AddJobPage 
              handleAddJob={this.handleAddJob}
            />
          }/>
          <Route exact path='/jobcard' render={() =>
            <JobCard 
              jobs={this.state.jobs}
            />
          }/>
          <Route exact path='/joblist' render={() =>
            <JobListPage />
          }/>
          <Route exact path='/editjob' render={({history, location}) =>
            <EditJobPage 
              handleUpdateJob={this.handleUpdateJob}
              location={location}
              history={history}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;