//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'

//This is my campus sub-reducer
export default function campusesReducer (state = [], action) {
    switch (action.type) {
      case GOT_CAMPUSES:
        return action.campuses
      default:
        return state;
    }
  }
