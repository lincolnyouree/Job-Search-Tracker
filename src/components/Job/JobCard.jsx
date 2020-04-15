// import React from 'react';
// import {Link} from 'react-router-dom';

// function JobCard({job, handleDeleteJob}) {
//     return (
//         <div className='panel panel-default'>
//             <div className="panel-heading">
//     <h3 className='panel-title'>{job.position}{job.company}</h3>
//             </div>
//             <div className='panel-footer'>
//             <Link
//       className='btn btn-xs btn-warning'
//       to={{
//               pathname: '/editjob',
//               state: {job}
//       }}
//   >
//   EDIT
//   </Link>
// </div>
//         </div>
//     )
// }

// export default JobCard;

import React from 'react';
import './Job.css';
import {Link} from 'react-router-dom';


const Job = (props) => (
  <div className="form-control">

      <h2>Job List:</h2>      
    {props.jobs.length ? 
      props.jobs.map((job, idx) =>
        <li key={job._id}>{job.position} at {job.company}
          <button className='btn' onClick={() => props.handleDeleteJob(job._id)}>DELETE</button>
          <Link className='btn' to={{pathname: '/jobcard'}}>Job Details</Link>
        </li>
      )
      : <div></div>
    }
  </div>
)

 
export default Job;