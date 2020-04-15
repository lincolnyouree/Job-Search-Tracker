import React from 'react';
import {Link} from 'react-router-dom';

function JobCard({job, handleDeleteJob}) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
    <h3 className='panel-title'>{job.position}{job.company}</h3>
            </div>
            <div className='panel-footer'>
            <Link
      className='btn btn-xs btn-warning'
      to={{
              pathname: '/editjob',
              state: {job}
      }}
  >
  EDIT
  </Link>
</div>
        </div>
    )
}

export default JobCard;