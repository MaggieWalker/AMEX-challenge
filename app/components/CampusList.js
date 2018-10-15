import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/index'

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
                    <li key={campus.id}> <h3>Campus Name: {campus.name}</h3>
                        <br /><img src={campus.image} height="300" width="300" />
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
