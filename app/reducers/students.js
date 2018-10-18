//action type
const GOT_STUDENTS = 'GOT_STUDENTS';
const NEW_STUDENT = 'NEW_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

const initialState = [
  {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    GPA: '',
    campusID: '',
  },
];

//This my students sub-reducer
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;
    case NEW_STUDENT:
      return [...state, action.student.data];
    case DELETE_STUDENT:
      return state.filter(
        student =>
          action.student.data.deletedStudent.toString() !==
          student.id.toString()
      );
    default:
      return state;
  }
}
