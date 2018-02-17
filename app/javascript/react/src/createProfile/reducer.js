import {
  REDIRECT_TO_PROFILE_PAGE
} from './actions'

const initialState = {
  redirectToProfile: false
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case REDIRECT_TO_PROFILE_PAGE:
      return Object.assign({}, state, {
        redirectToProfile: true
      })
    default:
      return state;
  }
}

export default profiles;
