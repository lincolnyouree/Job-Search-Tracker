import React from 'react';
import {Link} from 'react-router-dom';

function Job({job, handleDeleteJob}) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{job.position}</h3>
            </div>
            <div className='panel-footer'>
            <Link
      className='btn btn-xs btn-warning'
      to={{
              pathname: '/edit',
              state: {job}
      }}
  >
  EDIT
  </Link>
  <button className='btn btn-xs btn-danger margin-left-10' onClick={() => handleDeleteJob(job._id)}>
    DELETE
  </button>
</div>
        </div>
    )
}

export default Job;