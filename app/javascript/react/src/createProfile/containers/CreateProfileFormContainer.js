import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import CreateProfileFormPage2 from '../components/CreateProfileFormPage2';
import CreateProfileFormPage3 from '../components/CreateProfileFormPage3';
import CreateProfileFormPage4 from '../components/CreateProfileFormPage4';

import { postProfile } from '../actions'

class CreateProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  nextPage() {
    let newPage = this.state.page + 1
    this.setState({ page: newPage });
  }

  previousPage() {
    let newPage = this.state.page - 1
    this.setState({page: newPage})
  }

  handleSubmit(values) {
    this.props.onSubmit(values);
  };

  render() {
    const { page } = this.state;

    const initialValues = {
      emailHidden: false
    }
    if(this.props.redirectToProfile) {
      return(
        <Redirect to="/profiles/1" />
      )
    }

    return (
      <div>
        {page === 1 && <CreateProfileFormPage2 initialValues={initialValues} onSubmit={this.nextPage} />}
        {page === 2 &&
          <CreateProfileFormPage3
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <CreateProfileFormPage4
            previousPage={this.previousPage}
            onSubmit={this.handleSubmit}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redirectToProfile: state.profiles.redirectToProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formFields) => { dispatch(postProfile(formFields)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfileFormContainer);
