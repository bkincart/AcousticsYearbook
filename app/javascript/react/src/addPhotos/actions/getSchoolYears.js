const GET_SCHOOL_YEARS_REQUEST = 'GET_SCHOOL_YEARS_REQUEST';
const GET_SCHOOL_YEARS_REQUEST_SUCCESS = 'GET_SCHOOL_YEARS_REQUEST_SUCCESS';
const GET_SCHOOL_YEARS_REQUEST_FAILURE = 'GET_SCHOOL_YEARS_REQUEST_FAILURE';

const getSchoolYearsRequest = () => {
  return {
    type: GET_SCHOOL_YEARS_REQUEST
  }
}

const getSchoolYearsRequestSuccess = (schoolYears) => {
  return {
    type: GET_SCHOOL_YEARS_REQUEST_SUCCESS,
    schoolYears
  }
}

const getSchoolYearsRequestFailure = () => {
  return {
    type: GET_SCHOOL_YEARS_REQUEST_FAILURE
  }
}

const getSchoolYears = () => {
  return dispatch => {
    dispatch(getSchoolYearsRequest());
    fetch('/api/v1/school_years')
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        let error = new Error(`Error in fetch getSchoolYears: ${status} (${statusText})`)
        throw(error);
      }
    })
    .then(body => {
      dispatch(getSchoolYearsRequestSuccess(body.school_years))
    })
    .catch(error => {
      dispatch(getSchoolYearsRequestFailure());
    })
  }
}

export {
  getSchoolYears,
  GET_SCHOOL_YEARS_REQUEST_SUCCESS
}
