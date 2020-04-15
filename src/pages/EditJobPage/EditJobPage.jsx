import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditJobPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.job
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateJob(this.state.formData);
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
        <h1>Edit Job</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Position:</label>
            <input
              name="position"
              value={this.state.formData.position}
              onChange={this.handleChange}
            />
            <label>Company:</label>
            <input
              name="company"
              value={this.state.formData.company}
              onChange={this.handleChange}
            />
            <label>Location:</label>
            <input
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
            />
            <label>Contact:</label>
            <input
              name="contact"
              value={this.state.formData.contact}
              onChange={this.handleChange}
            />
            <label>Date Applied:</label>
            <input
              name="dateApplied"
              value={this.state.formData.dateApplied}
              onChange={this.handleChange}
            />
            <label>Status:</label>
            <input
              name="status"
              value={this.state.formData.status}
              onChange={this.handleChange}
            />
            <label>Notes:</label>
            <input
              name="notes"
              value={this.state.formData.notes}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            SAVE JOB
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditJobPage;