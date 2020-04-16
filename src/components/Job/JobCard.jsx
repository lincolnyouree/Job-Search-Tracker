// import React from 'react';
// import './Job.css';
// import {Link} from 'react-router-dom';


// const Job = (props) => (
//   <div className="form-control">

//       <h2>Details</h2>      
//     {props.jobs.length ? 
//       props.jobs.map((job, idx) =>
//         <li key={job._id}>
//             {job.position}
//             {job.company}
//             {job.location}
//             {job.contact}
//             {job.dateApplied}
//             {job.status}
//             {job.notes}
//           <Link className='btn' to={{pathname: '/editjob'}}>Update</Link>
//         </li>
//       )
//       : <div></div>
//     }
//   </div>
// )

// export default Job;



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