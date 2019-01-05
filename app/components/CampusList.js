import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, removeCampus } from '../reducers/index';
import { Link } from 'react-router-dom';

class CampusList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await this.props.actions.fetchInitialCampuses();
  }

  async handleClick(event) {
    event.preventDefault();
    const campusId = event.target.id;
    await this.props.actions.removeSpecificCampus({ id: campusId });
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <div>
          <Link to="/campuses/new" activeClassName="active" id="addCampus">
            Add New Campus
          </Link>
        </div>
        <ul id="campus-list">
          {campuses.map(campus => (
            <div key={campus.id}>
              <li>
                <Link to={`/campuses/${campus.id}`}>
                  <h3>
                    Campus: {campus.name}
                    <br />
                    <img src={campus.image} height="300" width="300" />
                  </h3>
                </Link>
                <button
                  type="button"
                  id={`${campus.id}`}
                  onClick={this.handleClick}>
                  X
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchInitialCampuses: () => dispatch(fetchCampuses()),
      removeSpecificCampus: campus => dispatch(removeCampus(campus)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusList);
