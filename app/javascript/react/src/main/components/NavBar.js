import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../actions'

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
          <li><a href={`/users/${this.props.id}`}>My Profile</a></li>
          <li className="active"><a href="#">Upload Photos</a></li>
          <li><a href='/sign_out'>Sign Out</a></li>
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
            <h1><a href="/"><img src='https://static.wixstatic.com/media/3ffd19_dfc5722c5bb4493a8c9a76bf91090456.png/v1/fill/w_60,h_71,al_c,usm_0.66_1.00_0.01/3ffd19_dfc5722c5bb4493a8c9a76bf91090456.png'/></a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            { userSection }
          </ul>

          <ul className="left">
              <div id="searchbar">
                <input type="text" id='search-box'/>
                <div id="btn" className='button' onClick={console.log('clicked!')} >Search</div>
              </div>
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
