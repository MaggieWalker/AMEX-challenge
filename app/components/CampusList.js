import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/index'
import { Link } from 'react-router-dom'

class CampusList extends Component {

    async componentDidMount() {
        console.log('CampusList mounted!')
        await this.props.fetchInitialCampuses()
    }

    render() {
        const campuses = this.props.campuses
        return (
            <div>
                <div>
                   <Link to="/campuses/new" activeClassName ="active" id="addCampus">Add New Campus</Link>
                </div>
                <ul id="campus-list">
                    {
                        campuses.map(campus =>
                    (
                    <li key={campus.id}>
                        <Link to={`/campuses/${campus.id}`} >
                        <h3>Campus: {campus.name}
                            <br /><img src={campus.image} height="300" width="300" />
                        </h3>
                        </Link>
                    </li>
                   ))
                    }
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
