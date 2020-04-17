import React from 'react';
import './Job.css';
import {Link} from 'react-router-dom';

const Job = (props) => (
  <div className="form-control-list">
  <div className="logolist"><img src="'../../logo.png" alt=""/></div>
      <div className="listCards">
    {props.jobs.length ? 
      props.jobs.map((job, idx) =>
      <div className="jobCardOuterBorder">
      <div className="jobCardBorder">
      <div className="jobCard">
        <li key={job._id} className="key">
          <div className="info">
              <div className="companyList">
              <dd>{job.company}</dd>
              </div><br></br>
              <div className="positionList">
              <dt>Position:</dt>
              <dd>{job.position}</dd>
              </div><br></br>
              <div className="locationList">
              <dt>Location:</dt>
              <dd>{job.location}</dd>
              </div>
            </div><br></br>
            <div className="detailsLink">
            <Link 
              className='detailsLink' 
              to={{
                pathname: '/editjob',
                state: {job},
                idx: idx
              }}>
                Details | Update
            </Link>
            </div><br></br>
          </li>
              <button className='deleteBtn' onClick={() => props.handleDeleteJob(idx)}>X</button>
    </div>
    </div>
    </div>
      )
      : <div></div>
    }
    </div>
  </div>
  )

export default Job;