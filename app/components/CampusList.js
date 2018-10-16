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
                <ul id="campus-list">
                    {
                        campuses.map(campus =>
                    (
                    <li key={campus.id}> <h3>Campus: {campus.name}</h3>
                        <br /><Link to={`/campuses/${campus.id}`} ><img src={campus.image} height="300" width="300" /> </Link>
                    </li>))
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
