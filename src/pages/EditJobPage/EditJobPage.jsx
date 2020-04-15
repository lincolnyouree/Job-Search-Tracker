import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditJobPage extends Component {
  state = {
      invalidForm: true,
      formData: {
        position: '',
      }
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
        <form className="editForm" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Position:</label>
            <input
              className="form-control"
              name="position"
              value={this.state.formData.position}
              onChange={this.handleChange}
            />
            <label>Company:</label>
            <input
              className="form-control"
              name="company"
              value={this.state.formData.company}
              onChange={this.handleChange}
            />
            <label>Location:</label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
            />
            <label>Contact:</label>
            <input
              className="form-control"
              name="contact"
              value={this.state.formData.contact}
              onChange={this.handleChange}
            />
            <label>Date Applied:</label>
            <input
              className="form-control"
              name="dateApplied"
              value={this.state.formData.dateApplied}
              onChange={this.handleChange}
            />
            <label>Status:</label>
            <input
              className="form-control"
              name="status"
              value={this.state.formData.status}
              onChange={this.handleChange}
            />
            <label>Notes:</label>
            <input
              className="notes"
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
            UPDATE JOB
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditJobPage;