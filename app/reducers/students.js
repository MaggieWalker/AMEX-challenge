//action type
const GOT_STUDENTS = 'GOT_STUDENTS'

//This my students sub-reducer
export default function studentsReducer (state = [], action) {
    switch (action.type) {
      case GOT_STUDENTS:
        return action.students
      default:
        return state;
    }
  }
