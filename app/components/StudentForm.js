import React, { Component } from 'react'
import {connect} from 'react-redux';
import { addStudent } from '../reducers/index'

class StudentForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: 'ExampleFirst',
            lastName: 'ExampleLast',
            email: 'Email@email.com'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
componentDidMount() {
        console.log('Student form mounted!')
    }

handleSubmit(event){
    event.preventDefault();
    this.props.insertStudent(
        {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        );
    console.log('I have submitted!')//not sure yet
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('emailInput').value = '';
    }

handleChange(event){
    event.preventDefault();
    console.log('event target', event.target);
    console.log('state', this.state)
    const eventTarget = event.target.name;
    if (eventTarget === 'firstName') {
        this.setState({firstName: event.target.value})
    } else if (eventTarget === 'lastName') {
        this.setState({lastName: event.target.value})
    } else if (eventTarget === 'email') {
        this.setState({email: event.target.value})
    }
}

render() {


    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" id="firstNameInput" onChange={this.handleChange} placeholder="First Name" />
            <input type="text" name="lastName" id="lastNameInput" onChange={this.handleChange} placeholder="Last Name" />
            <input type="text" name="email" id="emailInput" onChange={this.handleChange} placeholder="Email" />
            <button type="submit" id="studentButton">Add New Student!</button>
        </form>
    )
}
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insertStudent: (student) => dispatch(addStudent(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
