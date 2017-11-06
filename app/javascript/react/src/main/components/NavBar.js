import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser, signUserOut } from '../actions'

class NavBar extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    let userSection;

    if (this.props.id) {
      userSection = <li className="has-dropdown">
        <a href="#">My picture!</a>
        <ul className="dropdown">
          <li><a href="#">My Profile</a></li>
          <li className="active"><a href="#">Upload Photos</a></li>
          <li onClick={this.props.signUserOut}>Sign Out</li>
        </ul>
      </li>
    } else {
      userSection = <li className="has-dropdown">
        <a href="#">Sign Up/Sign In</a>
        <ul className="dropdown">
          <li><a href="/users/sign_up">Sign Up</a></li>
          <li className="active"><a href="/users/sign_in">Sign In</a></li>
        </ul>
      </li>
    }

    return(
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#"><img src='https://static.wixstatic.com/media/3ffd19_dfc5722c5bb4493a8c9a76bf91090456.png/v1/fill/w_60,h_71,al_c,usm_0.66_1.00_0.01/3ffd19_dfc5722c5bb4493a8c9a76bf91090456.png'/></a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            <li className="active"><a href="#">Right Button Active</a></li>
            { userSection }
          </ul>

          <ul className="left">
            <li><a href="#">Left Nav Button</a></li>
          </ul>
        </section>
      </nav>
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
    },
    signUserOut: () => {
      dispatch(signUserOut())
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
