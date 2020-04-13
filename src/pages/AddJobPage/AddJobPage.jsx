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
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Position: </label>
            <input
              className="form-control"
              name="position"
              value={this.state.formData.position}
              onChange={this.handleChange}
              required
            />
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