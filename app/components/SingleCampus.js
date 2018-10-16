import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/index'

class SingleCampus extends Component {

    async componentDidMount() {
        console.log('Single Campus mounted!')
        await this.props.fetchInitialCampuses()
    }
    
    render() {
        const pathname = window.location.pathname
        const campusId = pathname.slice(-1)
        console.log('this.props', this.props)
        const campusList = this.props.campuses
        const currCampus = campusList.filter(campus => campus.id.toString() === campusId.toString())[0]
        return (
        <div>
            { currCampus ?
        <div>
            <div id="single-campus">
                 <h3>Campus: {currCampus.name.toString()}</h3>
                        <br />
                        <img src={currCampus.image.toString()} height="300" width="300" />
            </div>

            <div>
                <p>Address: {currCampus.address.toString()}</p>
                <p>Description: {currCampus.description.toString()}</p>
                <p>Students:
                {
                    currCampus.students[0] ? currCampus.students.map(student => {
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
