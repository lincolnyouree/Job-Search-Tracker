import React from 'react';
import './JobListPage.css';
import JobCard from '../../components/JobCard/JobCard';

function JobListPage(props) {
  return (
    <>
        <h1>Job List</h1>
            <div className='JobListPage-grid'>
                {props.jobs.map(job =>
                     <JobCard
                        key={job._id}
                        job={job}
                        handleDeleteJob={props.handleDeleteJob}
                />
            )}
        </div>
    </>
  );
}

export default JobListPage;