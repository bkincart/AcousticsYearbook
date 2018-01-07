import React, { Component } from 'react';
import { connect } from 'react-redux'

import CreateProfileFormFirstPage from '../components/CreateProfileFormFirstPage';
import CreateProfileFormSecondPage from '../components/CreateProfileFormSecondPage';
import CreateProfileFormThirdPage from '../components/CreateProfileFormThirdPage';

import { postProfile } from '../actions'

class CreateProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    let newPage = this.state.page + 1
    this.setState({page: newPage})
  }

  previousPage() {
    let newPage = this.state.page - 1
    this.setState({page: newPage})
  }

  render() {
    if(this.props.redirectToProfile) {
      return(
        <Redirect to="/profiles/1" />
      )
    }

    let selectedForm;
    if(this.state.page === 1) {
      selectedForm = <CreateProfileFormFirstPage
        handleSubmit={this.nextPage}
      />
    } else if(this.state.page === 2) {
      selectedForm = <CreateProfileFormSecondPage
        handleSubmit={this.nextPage}
        previousPage={this.previousPage}
      />
    } else if(this.state.page === 3) {
      selectedForm = <CreateProfileFormThirdPage
        handleSubmit={this.props.onSubmit}
        previousPage={this.previousPage}
      />
    }

    return(
      <div>
      { selectedForm }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch(postProfile()) }
  }
}

const mapStateToProps = (state) => {
  return {
    redirectToProfile: state.profiles.redirectToProfile
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfileFormContainer);
