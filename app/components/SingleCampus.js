import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/index'

class SingleCampus extends Component {

    async componentDidMount() {
        console.log('Single Campus mounted!')
        await this.props.fetchInitialCampuses()
    }
    
    render() {
        // const name = campus.name
        // const students = campus.students
        console.log('pathname', window.location.pathname)
        const pathname = window.location.pathname
        const campusId = pathname.slice(-1)
        const campus = this.props.campuses[campusId]
        return (
        <div>
            { campus ?
        <div>
            <div id="single-campus">
                 <h3>Campus: {campus.name.toString()}</h3>
                        <br />
                        <img src={campus.image.toString()} height="300" width="300" />
            </div>

            <div>
                <p>Address: {campus.address.toString()}</p>
                <p>Description: {campus.description.toString()}</p>
                <p>Students:
                {
                    campus.students[0] ? campus.students.map(student => {
                    return ' ' + student.firstName + ' ' + student.lastName + ' '
                })
                : <p>No students registered!</p>
                }
                </p>
            </div>
        </div> 
        : <div>Nothing to load!</div>
            }
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialCampuses: () => dispatch(fetchCampuses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
