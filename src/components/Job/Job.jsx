import React from 'react';
import './Job.css';


const Job = (props) => (
  <div className="form-control">

      <h2>Job List:</h2>      
    {props.jobs.length ? 
      props.jobs.map((job, idx) =>
        <li>{job.position}</li>
      )
        : <div></div>
    }

  </div>
)
 
export default Job;