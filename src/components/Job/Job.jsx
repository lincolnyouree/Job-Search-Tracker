import React from 'react';
import './Job.css';
// import JobCard from './JobCard';
import {Link} from 'react-router-dom';


const Job = (props) => (
  <div className="form-control">

      <h2>Job List:</h2>      
    {props.jobs.length ? 
      props.jobs.map((job, idx) =>
        <li key={job._id}>{job.position} at {job.company}
          <button className='btn' onClick={() => props.handleDeleteJob(job._id)}>DELETE</button>
        </li>
      )
        : <div></div>
    }
  </div>
)

 
export default Job;