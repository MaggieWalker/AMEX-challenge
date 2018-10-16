//action type
const GOT_STUDENTS = 'GOT_STUDENTS'
const initialState = [{id: '', firstName: '', lastName: '', image: '', GPA: '', campusID: '' }]
//This my students sub-reducer
export default function studentsReducer (state = initialState, action) {
    switch (action.type) {
      case GOT_STUDENTS:
        return action.students
      default:
        return state;
    }
  }
