import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditJobPage.css';

class EditJobPage extends Component {
  state = {
      invalidForm: false,
      formData: 
      this.props.location.state.job,    
    idx: this.props.location.idx
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateJob(this.state.formData, this.state.idx, this.props.location.state.job._id);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <div className="editFormOuterBorder">
        <div className="editFormBorder">
        <form className="editForm" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <header className="editHeader">Details</header><br></br>
          <div className="form-group">
            <label>Position:</label>
            <input
              className="form-control"
              name="position"
              value={this.state.formData.position}
              onChange={this.handleChange}
            /><br></br>
            <label>Company:</label>
            <input
              className="form-control"
              name="company"
              value={this.state.formData.company}
              onChange={this.handleChange}
            /><br></br>
            <label>Location:</label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
            /><br></br>
            <label>Contact:</label>
            <input
              className="form-control"
              name="contact"
              value={this.state.formData.contact}
              onChange={this.handleChange}
            /><br></br>
            <label>Date Applied:</label>
            <input
              className="form-control"
              name="dateApplied"
              value={this.state.formData.dateApplied}
              onChange={this.handleChange}
            /><br></br>
            <label>Status:</label>
            <input
              className="form-control"
              name="status"
              value={this.state.formData.status}
              onChange={this.handleChange}
            /><br></br>
            <label>Notes:</label>
            <input
              className="notes"
              name="notes"
              value={this.state.formData.notes}
              onChange={this.handleChange}
            /><br></br>
          </div>
          <button
            type="submit"
            className="editBtn"
            disabled={this.state.invalidForm}
          >
            Update
          </button>&nbsp;&nbsp;
          <Link to='/' className="back">Cancel</Link>
        </form>
          </div>
          </div>
      </>
    );
  }
}

export default EditJobPage;