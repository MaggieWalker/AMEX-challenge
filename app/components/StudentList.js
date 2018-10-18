import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudents, removeStudent } from '../reducers/index'
import { Link } from 'react-router-dom'

class StudentList extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    async componentDidMount() {
        console.log('StudentList mounted!')
        await this.props.actions.fetchInitialStudents()
    }

    async handleClick(event) {
        event.preventDefault();
        const studentId = event.target.id
        await this.props.actions.removeSpecificStudent({id: studentId})
        console.log('long console', this.props.actions.removeSpecificStudent({id: studentId}))
    }

    render() {
        const students = this.props.students
        console.log(students)
        return (
            <div>
                <div>
                   <Link to="/students/new" activeClassName ="active" id="addStudent">Add New Student</Link>
                </div>
                <ul id="student-list">
                    {
                    students.map(student => (
                    <div key={student.id}>
                    <li>
                        <Link to={`/students/${student.id}`}>
                            <h3>{student.firstName} {student.lastName}
                                <br />
                                <img src={student.image} height="200" width="200" />
                            </h3>
                        </Link>
                        <button type="button" id={`${student.id}`} onClick={this.handleClick}>X</button>
                    </li>
                    </div>
                    ))
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
        actions: {
            fetchInitialStudents: () => dispatch(fetchStudents()),
            removeSpecificStudent: (student) => dispatch(removeStudent(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
