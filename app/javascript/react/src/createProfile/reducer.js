import {
  REDIRECT_TO_PROFILE_PAGE
} from './actions/postProfile'

import {
  GET_INDUSTRIES_REQUEST_SUCCESS
} from './actions/getIndustries'

const initialState = {
  industries: [],
  redirectToProfile: false
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case REDIRECT_TO_PROFILE_PAGE:
      return Object.assign({}, state, {
        redirectToProfile: true
      })
    case GET_INDUSTRIES_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        industries: action.industries
      })
    default:
      return state;
  }
}

export default profiles;
