//action types
const GOT_CAMPUSES = 'GOT_CAMPUSES';
const NEW_CAMPUS = 'NEW_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

const initialState = [
  {
    id: '',
    name: '',
    image: '',
    address: '',
    description: ''
  },
];

//This is my campus sub-reducer
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case NEW_CAMPUS:
      return [...state, action.campus.data];
    case DELETE_CAMPUS:
      return state.filter(
        campus =>
          action.campus.data.deletedCampus.toString() !== campus.id.toString()
      );
    default:
      return state;
  }
}
