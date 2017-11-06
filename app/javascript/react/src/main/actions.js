const GET_CURRENT_USER_REQUEST_SUCCESS = "GET_CURRENT_USER_REQUEST_SUCCESS";
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";

let getCurrentUserRequestSuccess = user => {
  return {
    type: GET_CURRENT_USER_REQUEST_SUCCESS,
    user
  }
};

let signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS
  }
};

let signUserOut = () => {
  return dispatch => {
    fetch('/users/sign_out', {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let error = new Error(`signUserOut: ${response.status} ${response.text()}`);
        throw(error);
      }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error(`Error in fetch: ${error.message}`)))
  }
}

let fetchCurrentUser = () => {
  return dispatch => {
    fetch('/api/v1/current_user', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let error = new Error(`fetchCurrentUser: ${response.status} ${response.text()}`);
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
  SIGN_OUT_SUCCESS,
  fetchCurrentUser,
  signUserOut
};
