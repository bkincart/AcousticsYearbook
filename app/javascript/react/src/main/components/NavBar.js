import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../actions'

class NavBar extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return(
      <h1>{this.props.firstName}</h1>
    )
  }
};

const mapStateToProps = store => {
  return {
    id: store.currentUser.id,
    email: store.currentUser.email,
    firstName: store.currentUser.firstName,
    lastName: store.currentUser.lastName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)







// <% if user_signed_in? %>
// <%= link_to "Sign Out", destroy_user_session_path, method: :delete %>
// <% else %>
// <%= link_to "Sign Up", new_user_registration_path %>
// <%= link_to "Sign In", new_user_session_path %>
// <% end %>
