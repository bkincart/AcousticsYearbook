import { SubmissionError } from 'redux-form';
import humps from 'humps';

const POST_PROFILE_REQUEST = 'POST_PROFILE_REQUEST';
const POST_PROFILE_REQUEST_SUCCESS = 'POST_PROFILE_REQUEST_SUCCESS';
const POST_PROFILE_REQUEST_FAILURE = 'POST_PROFILE_REQUEST_FAILURE';
export const REDIRECT_TO_PROFILE_PAGE = 'REDIRECT_TO_PROFILE_PAGE';

const postProfileRequest = () => ({
  type: POST_PROFILE_REQUEST
});

const postProfileRequestFailure = () => ({
  type: POST_PROFILE_REQUEST_FAILURE
});

const postProfileRequestSuccess = () => ({
  type: POST_PROFILE_REQUEST_SUCCESS
});

const redirectToProfilePage = () => {
  return {
    type: REDIRECT_TO_PROFILE_PAGE
  }
}

let postProfile = profileFormPayload => {
  let decamelizedProfile = humps.decamelizeKeys(profileFormPayload)
  let body = JSON.stringify({
    profile: decamelizedProfile
  })
  return dispatch => {
    dispatch(postProfileRequest())
    return fetch('/api/v1/profiles',
    {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(response => {
      if(response.status === 500) {
        throw('Server Error.')
      } else {
        return response.json();
      }
    })
    .then(data => {
      if(data.error) {
        throw(data.error)
      } else {
        dispatch(redirectToProfilePage())
        return dispatch(postProfileRequestSuccess())
      }
    })
    .catch(error => {
      dispatch(postProfileRequestFailure())
      throw new SubmissionError({ '_error': error })
    })
  }
}

export {
  postProfile,
  redirectToProfilePage
};
