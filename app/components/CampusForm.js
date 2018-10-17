// import createForm from './createForm'
import React, { Component } from 'react'
import {connect} from 'react-redux';
import { addCampus } from '../reducers/index'


//Attempt at higher order component, made dispatching my actions confusing
// const CampusForm = function (props) {
//     const { handleSubmit, handleChange } = props

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" id="campusInput" onChange={handleChange} placeholder="Name" />
//             <input type="text" name="address" id="addressInput" onChange={handleChange} placeholder="Address" />
//             <button type="submit" id="campusButton">Add New Campus!</button>
//         </form>
//     )
// }

// export default createForm(CampusForm)


class CampusForm extends Component {
    constructor() {
        super()
        this.state = {
            name: 'ExampleName',
            address: 'ExampleAddress',
            description: 'ExampleDescription'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
componentDidMount() {
        console.log('Campusform mounted!')
    }

handleSubmit(event){
    event.preventDefault();
    this.props.insertCampus(
        {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        }
        );
    console.log('I have submitted!')//not sure yet
    document.getElementById('campusInput').value = '';
    document.getElementById('addressInput').value = '';
    document.getElementById('descriptionInput').value = '';
    }

handleChange(event){
    event.preventDefault();
    console.log('event target', event.target);
    console.log('state', this.state)
    const eventTarget = event.target.name;
    if (eventTarget === 'name') {
        this.setState({name: event.target.value})
    } else if (eventTarget === 'address') {
        this.setState({address: event.target.value})
    } else if (eventTarget === 'description') {
        this.setState({description: event.target.value})
    }
}

render() {


    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" id="campusInput" onChange={this.handleChange} placeholder="Name" />
            <input type="text" name="address" id="addressInput" onChange={this.handleChange} placeholder="Address" />
            <input type="text" name="description" id="descriptionInput" onChange={this.handleChange} placeholder="Description" />
            <button type="submit" id="campusButton">Add New Campus!</button>
        </form>
    )
}
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insertCampus: (campus) => dispatch(addCampus(campus))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
