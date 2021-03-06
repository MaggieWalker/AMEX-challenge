import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, removeCampus, getBook } from '../reducers/index';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.actions.fetchInitialCampuses();
  }

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;
    console.log('eventTarget', eventTarget)
    if (eventTarget === 'title') {
      this.setState({ searchInput: event.target.value });
    }
  }

  async handleClick(event) {
    event.preventDefault();
    const campusId = event.target.id;
    await this.props.actions.removeSpecificCampus({ id: campusId });
  }
  onSubmit(){
    this.props.actions.fetchSingleBook(this.state.searchInput)
  }

  render() {
    const campuses = this.props.campuses;
    const books = this.props.campuses.docs;
    return (
      <div>
        <div id="welcome">
          <h1>Search for a book here:</h1>
        <br />
          <div>
              Title: <input type="text" name="title" onChange ={this.handleChange} />
              <input type="submit" value="Search" onClick={this.onSubmit} />
          </div>
        </div>

        <div>
          <Link to="/campuses/new" activeClassName="active" id="addCampus">
            Add New Campus
          </Link>
        </div>
        <ul id="campus-list">
          {books ? books.map(book => (
            <div key={book.isbn}>
              <li>
                <Link to={`/campuses/${book.isbn}`}>
                  <h3>
                    Book: {book.title}
                    <br />
                    Author: {book.author_name}
                  </h3>
                </Link>
                <button
                  type="button"
                  id={`${book.isbn}`}
                  onClick={this.handleClick}>
                  X
                </button>
              </li>
            </div>
          )) : <div></div>}
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
      fetchSingleBook: (searchInput) => dispatch(getBook(searchInput)),
      fetchInitialCampuses: () => dispatch(fetchCampuses()),
      removeSpecificCampus: (campus) => dispatch(removeCampus(campus)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
