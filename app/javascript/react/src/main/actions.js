const GET_CURRENT_USER_REQUEST_SUCCESS = "GET_CURRENT_USER_REQUEST_SUCCESS";

let getCurrentUserRequestSuccess = user => {
  return {
    type: GET_CURRENT_USER_REQUEST_SUCCESS,
    user
  }
};

let fetchCurrentUser = () => {
  return dispatch => {
    fetch('/api/v1/current_user', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      debugger;
      if (response.ok) {
        return response.json();
      } else {
        let error = new Error(`fetchCurrentUser: ${response.status} ${response.text}`);
        throw(error);
      }
    })
    .then(data => {
      dispatch(getCurrentUserRequestSuccess(data.user))
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
};

export {
  GET_CURRENT_USER_REQUEST_SUCCESS,
  fetchCurrentUser
};
