//This is an unused component, but would be the basis for a higher order form component

import React, { Component } from 'react';
import addCampus from '../reducers/index';

const createForm = FormComponent => {
  return class StatefulForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      dispatch(addCampus({ name: 'Maggie' }));
      document.getElementById('campusInput').value = '';
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({ name: event.target.value });
    }

    render() {
      return (
        <FormComponent
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default createForm;

