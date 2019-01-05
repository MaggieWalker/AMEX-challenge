// import createForm from './createForm'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../reducers/index';

class CampusForm extends Component {
  constructor() {
    super();
    this.state = {
      name: 'ExampleName',
      address: 'ExampleAddress',
      description: 'ExampleDescription',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.insertCampus({
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
    });
    document.getElementById('campusInput').value = '';
    document.getElementById('addressInput').value = '';
    document.getElementById('descriptionInput').value = '';
  }

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;
    if (eventTarget === 'name') {
      this.setState({ name: event.target.value });
    } else if (eventTarget === 'address') {
      this.setState({ address: event.target.value });
    } else if (eventTarget === 'description') {
      this.setState({ description: event.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          id="campusInput"
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="address"
          id="addressInput"
          onChange={this.handleChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="description"
          id="descriptionInput"
          onChange={this.handleChange}
          placeholder="Description"
        />
        <button type="submit" id="campusButton">
          Add New Campus!
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    insertCampus: campus => dispatch(addCampus(campus)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusForm);
