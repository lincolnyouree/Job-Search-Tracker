import React from 'react';
import './Job.css';
import {Link} from 'react-router-dom';


const Job = (props) => (
  <div className="form-control">
      <h2>Job List:</h2>     
    {props.jobs.length ? 
      props.jobs.map((job, idx) =>
      <li key={job._id}>{job.position} at {job.company}
          <button className='deleteBtn' onClick={() => props.handleDeleteJob(idx)}>X</button>
          <Link className='detailsLink' to={{pathname: '/jobcard'}}>Job Details</Link>
        </li>
      )
      : <div></div>
    }
  </div>
)

 
export default Job;