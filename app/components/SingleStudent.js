import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudents } from '../reducers/index'

class SingleStudent extends Component {

async componentDidMount() {
    console.log('StudentList mounted!')
    await this.props.fetchInitialStudents()
}

render() {
    const pathname = window.location.pathname
    const studentId = pathname.slice(-1)
    const student = this.props.students[studentId]
    console.log(studentId)
    return (
        <div>
            { student ?
        <div>
            <div id="single-student">
                 <h3>Student: {student.firstName.toString()} {student.lastName.toString()}</h3>
                        <br />
                        <img src={student.image.toString()} height="300" width="300" />
            </div>
                <p>Campus:TBD!</p>
        </div>
        : <div>Nothing to load!</div>
            }
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
