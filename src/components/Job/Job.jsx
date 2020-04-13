import React from 'react';


const Job = (props) => (
  <div>

      <h3>This is the Job Component.</h3>
      <p>It is located at src/components/Job/Job.jsx</p>

      {props.jobs.map((job, idx) =>
        <li>{props.jobs[idx]}</li>
      )}


  </div>
)
 
export default Job;