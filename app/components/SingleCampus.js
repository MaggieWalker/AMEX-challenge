import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/index';

class SingleCampus extends Component {
  async componentDidMount() {
    await this.props.fetchInitialCampuses();
  }

  render() {
    const pathname = window.location.pathname;
    const campusId = pathname.slice(10);
    const campusList = this.props.campuses;
    const currCampus = campusList.filter(
      campus => campus.id.toString() === campusId.toString()
    )[0];
    return (
      <div>
        {currCampus ? (
          <div>
            <div id="single-campus">
              <h3>Campus: {currCampus.name.toString()}</h3>
              <br />
              <img src={currCampus.image.toString()} height="300" width="300" />
            </div>

            <div>
              <p>Address: {currCampus.address.toString()}</p>
              <p>Description: {currCampus.description.toString()}</p>
              <p>
                Students:
                <ul>
                  {currCampus.students[0] ? (
                    currCampus.students.map(student => {
                      return (
                        <li key={student.id}>
                          {' '}
                          {student.firstName} {student.lastName}{' '}
                        </li>
                      );
                    })
                  ) : (
                    <p>No students registered!</p>
                  )}
                </ul>
              </p>
            </div>
          </div>
        ) : (
          <div>No campus with this id!</div>
        )}
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
    fetchInitialCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
