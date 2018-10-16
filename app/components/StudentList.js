import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudents } from '../reducers/index'
import { Link } from 'react-router-dom'

class StudentList extends Component {

    async componentDidMount() {
        console.log('StudentList mounted!')
        await this.props.fetchInitialStudents()
    }

    render() {
        const students = this.props.students
        console.log(students)
        return (
            <div>
                <ul id="student-list">
                    {
                    students.map(student => (
                    <li key={student.id}>
                        <h3>Student Name: {student.firstName} {student.lastName}
                        <br />
                        <Link to={`/students/${student.id}`}><img src={student.image} height="200" width="200" /></Link>
                        </h3>
                    </li>))
                    }
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
