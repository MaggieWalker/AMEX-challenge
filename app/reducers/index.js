// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import axios from 'axios';
import campusesReducer from './campuses';
import studentsReducer from './students';

//action types
const GOT_BOOK = 'GOT_BOOK'
const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_STUDENTS = 'GOT_STUDENTS';
const NEW_CAMPUS = 'NEW_CAMPUS';
const NEW_STUDENT = 'NEW_STUDENT';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';

//action creators
export const gotBook = book => ({
  type: GOT_BOOK,
  book
})

export const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses,
});

export const gotStudents = students => ({
  type: GOT_STUDENTS,
  students,
});

export const newCampus = campus => ({
  type: NEW_CAMPUS,
  campus,
});

export const newStudent = student => ({
  type: NEW_STUDENT,
  student,
});

export const deleteCampus = campus => ({
  type: DELETE_CAMPUS,
  campus,
});

export const deleteStudent = student => ({
  type: DELETE_STUDENT,
  student,
});

//Campus thunk creator/action creator. Creating my thunk function
export const getBook = (searchInput) => {
  return async dispatch => {
    const res = await axios.get(`http://openlibrary.org/search.json?q=${searchInput}`);
    console.log('res in index.js', res)
    const bookInfo = res.data;
    const currAction = gotBook(bookInfo);
    dispatch(currAction)
  }
}

export const fetchCampuses = () => {
  return async dispatch => {
    const response = await axios.get('/api/campuses');
    const campusList = response.data;
    const currAction = gotCampuses(campusList);
    dispatch(currAction);
  };
};

//Student thunk creator/action creator.
export const fetchStudents = () => {
  return async dispatch => {
    const response = await axios.get('/api/students');
    const studentList = response.data;
    const currAction = gotStudents(studentList);
    dispatch(currAction);
  };
};

export const addCampus = campus => {
  return async dispatch => {
    const postedCampus = await axios.post('/api/campuses', campus);
    const currAction = newCampus(postedCampus);
    dispatch(currAction);
  };
};

export const addStudent = student => {
  return async dispatch => {
    const postedStudent = await axios.post('/api/students', student);
    const currAction = newStudent(postedStudent);
    dispatch(currAction);
  };
};

export const removeCampus = campus => {
  return async dispatch => {
    const removedCampus = await axios.delete('/api/campuses', { data: campus });
    const currAction = deleteCampus(removedCampus);
    dispatch(currAction);
  };
};

export const removeStudent = student => {
  return async dispatch => {
    const removedStudent = await axios.delete('/api/students', {
      data: student,
    });
    const currAction = deleteStudent(removedStudent);
    dispatch(currAction);
  };
};

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
});
export default rootReducer;
