import { GET_CURRENT_USER_REQUEST_SUCCESS } from './actions.js'

const initialState = {
  id: null,
  email: '',
  firstName: '',
  lastName: ''
};

let currentUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        id: action.user.id,
        email: action.user.email,
        firstName: action.user.first_name,
        lastName: action.user.last_name
      })
    default:
      return state;
  }
};

export default currentUser;
