// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import axios from 'axios'
import campusesReducer from './campuses'
import studentsReducer from './students'

//action types
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_STUDENTS = 'GOT_STUDENTS'


//action creator
//Campuses is from the state - do I have an initial state within my subreducers?
export const gotCampuses = (campuses) => ({
  type: GOT_CAMPUSES,
  campuses
})

export const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
})

//Campus thunk creator/action creator. Creating my thunk function
export const fetchCampuses = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/campuses');
    const campusList = response.data;
    const currAction = gotCampuses(campusList)
    dispatch(currAction)
  }
}

//Student thunk creator/action creator.
export const fetchStudents = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/students');
    const studentList = response.data;
    const currAction = gotStudents(studentList);
    dispatch(currAction)
  }
}


// My current initial state is {campuses: [], students: []}
////////////////////////////////////////////////////////////

const rootReducer = combineReducers({campuses: campusesReducer, students: studentsReducer})
export default rootReducer
