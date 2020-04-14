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
    console.log("handleLogout");
    userAPI.logout();
    this.setState({ user: null, jobs : [] });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
    this.componentDidMount();
    
  }

  async componentDidMount() {
    console.log("HOEW")
    if (this.state.user) {
      const allJobs = await jobAPI.index();
      // let jobs = this.state.user.jobs
      console.log(allJobs);
      this.setState({ jobs : allJobs });

    }
  }

  handleAddJob = async newJobData => {
    const newJob = await jobAPI.create(newJobData);
    this.setState( {
      jobs: [...this.state.jobs, newJobData]
    }, () => this.props.history.push('/'));
  }
  
  // handleDeleteJob= async id => {
  //   await jobAPI.deleteOne(id);
  //   this.setState(state => ({
  //     jobs: state.jobs.filter(j => j._id !== id)
  //   }), () => this.props.history.push('/'));
  // }
  
  // handleUpdateJob = async updatedJobData => {
  //   const updatedJob = await jobAPI.update(updatedJobData);
  //   const newJobsArray = this.state.jobs.map(j => 
  //     j._id === updatedJob._id ? updatedJob : j
  //   );
  //   this.setState(
  //     {jobs: newJobsArray},
  //     () => this.props.history.push('/')
  //   );
  // }

  render() {
    return (
      <div className="App">
        <h1>Job Search Tracker</h1>
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
            <Job
              jobs={this.state.jobs}
            />
          }/>
          <Route exact path='/addjob' render={() =>
            <AddJobPage handleAddJob={this.handleAddJob}
            />
          }/>





          <Route exact path='../../components/Job/Job' render={() =>
            <JobCard />
          }/>
          <Route exact path='../../pages/JobListPage/JobListPage' render={() =>
            <JobListPage />
          }/>
          <Route exact path='../../pages/EditJobPage/EditJobPage' render={() =>
            <EditJobPage />
          }/>








        </Switch>
      </div>
    );
  }
}

export default App;