import React, {Component} from 'react';
import './AddJobPage.css';

class AddJobPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      position: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddJob(this.state.formData);
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
        <h1>Add Job</h1>
        <form className="addForm"ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Position: </label>
            <input
              className="form-control"
              name="position"
              value={this.state.formData.position}
              onChange={this.handleChange}
              required
            /><br></br>
            <label>Company: </label>
            <input
              className="form-control"
              name="company"
              value={this.state.formData.company}
              onChange={this.handleChange}
              required
            /><br></br>
            <label>Location: </label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
              required
            /><br></br>
            <label>Contact: </label>
            <input
              className="form-control"
              name="contact"
              value={this.state.formData.contact}
              onChange={this.handleChange}
            /><br></br>
            <label>Date Applied: </label>
            <input
              className="form-control"
              name="dateApplied"
              value={this.state.formData.dateApplied}
              onChange={this.handleChange}
            /><br></br>
            <label>Status: </label>
            <input
              className="form-control"
              name="status"
              value={this.state.formData.status}
              onChange={this.handleChange}
            /><br></br>
            <label>Notes: </label>
            <input
              className="notes"
              name="notes"
              value={this.state.formData.notes}
              onChange={this.handleChange}
            /><br></br>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD JOB
          </button>
        </form>
      </>
    );
  }
}
export default AddJobPage;