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
    const studentList = this.props.students
    const currStudent = studentList.filter(student => student.id.toString() === studentId.toString())[0]
    return (
        <div>
            { currStudent ?
        <div>
            <div id="single-student">
                 <h3>Student: {currStudent.firstName.toString()} {currStudent.lastName.toString()}</h3>
                        <br />
                        <img src={currStudent.image.toString()} height="300" width="300" />
            </div>
                <p>Email: {currStudent.email}</p>
                <p>Campus: {currStudent.campus.name}</p>
                <p>GPA: {currStudent.GPA}</p>
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
