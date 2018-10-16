//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const NEW_CAMPUS = 'NEW_CAMPUS'

const initialState = [{id: '', name: '', image: '', address: '', description: ''}]
//This is my campus sub-reducer
export default function campusesReducer (state = initialState, action) {
    switch (action.type) {
      case GOT_CAMPUSES:
        return action.campuses;
      case NEW_CAMPUS:
      console.log('action campus data', action.campus.data)
      console.log('state', state)
        return [...state, action.campus.data];
      default:
        return state;
    }
  }