const GET_INDUSTRIES_REQUEST = 'GET_INDUSTRIES_REQUEST';
export const GET_INDUSTRIES_REQUEST_SUCCESS = 'GET_INDUSTRIES_REQUEST_SUCCESS';
const GET_INDUSTRIES_REQUEST_FAILURE = 'GET_INDUSTRIES_REQUEST_FAILURE';

const getIndustriesRequest = () => {
  return {
    type: GET_INDUSTRIES_REQUEST
  }
}

const getIndustriesRequestSuccess = (industries) => {
  return {
    type: GET_INDUSTRIES_REQUEST_SUCCESS,
    industries
  }
}

const getIndustriesRequestFailure = () => {
  return {
    type: GET_INDUSTRIES_REQUEST_FAILURE
  }
}

let getIndustries = () => {
  return dispatch => {
    dispatch(getIndustriesRequest());
    fetch('/api/v1/industries', {
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        let error = new Error(`getIndustries: ${status} (${statusText})`)
        throw(error);
      }
    })
    .then(body => {
      dispatch(getIndustriesRequestSuccess(body.industries))
    })
    .catch(error => {
      dispatch(getIndustriesRequestFailure());
    })
  }
}

export {
  getIndustries
};
