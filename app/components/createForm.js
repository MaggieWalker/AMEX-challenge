import React, {Component} from 'react'
import addCampus from '../reducers/index'

const createForm = (FormComponent) => {
  return class StatefulForm extends Component {
    constructor() {
      super()
      this.state = {
          name: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
      event.preventDefault();
      dispatch(addCampus({name: 'Maggie'}))
      // addCampus({name: document.getElementById('campusInput').value});
      console.log(event.target.value)
      console.log('I have submitted!')//not sure yet
      document.getElementById('campusInput').value = '';
    }

    handleChange(event){
      event.preventDefault();
      console.log('event', event.target.value);
      this.setState({name: event.target.value})
    }

    render(){
      return <FormComponent
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    }
  }
}

export default createForm

//Map dispatch to props?? Why is my action not being recognized?
