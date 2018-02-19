import { GET_SCHOOL_YEARS_REQUEST_SUCCESS } from './actions/getSchoolYears'

const initialState = {
  schoolYears: []
}

const photos = (state = initialState, action) => {
  switch(action.type) {
    case GET_SCHOOL_YEARS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        schoolYears: action.schoolYears
      })
    default:
      return state;
  }
}

export default photos;
