//action type
const GOT_STUDENTS = 'GOT_STUDENTS'
const NEW_STUDENT = 'NEW_STUDENT'
const initialState = [{id: '', firstName: '', lastName: '', email: '', image: '', GPA: '', campusID: '' }]
//This my students sub-reducer
export default function studentsReducer (state = initialState, action) {
    switch (action.type) {
      case GOT_STUDENTS:
        return action.students
      case NEW_STUDENT:
      console.log('action student data', action.student.data)
      console.log('new student state', state)
        return [...state, action.student.data]
      default:
        return state;
    }
  }
