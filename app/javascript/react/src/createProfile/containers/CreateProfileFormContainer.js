import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import CreateProfileFormPage1 from '../components/CreateProfileFormPage1';
import CreateProfileFormPage2 from '../components/CreateProfileFormPage2';
import CreateProfileFormPage3 from '../components/CreateProfileFormPage3';
import CreateProfileFormPage4 from '../components/CreateProfileFormPage4';

import { getIndustries } from '../actions/getIndustries'
import { postProfile } from '../actions/postProfile'

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

  componentDidMount() {
    this.props.getIndustries()
  }

  render() {
    const { page } = this.state;

    if(this.props.redirectToProfile) {
      return(
        <Redirect to="/profiles/1" />
      )
    }

    return (
      <div>
        {page === 1 &&
          <CreateProfileFormPage1
            onSubmit={this.nextPage}
          />
        }
        {page === 2 &&
          <CreateProfileFormPage2
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        }
        {page === 3 &&
          <CreateProfileFormPage3
            industries={this.props.industries}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        }
        {page === 4 &&
          <CreateProfileFormPage4
            previousPage={this.previousPage}
            onSubmit={this.handleSubmit}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    industries: state.profiles.industries,
    redirectToProfile: state.profiles.redirectToProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIndustries: () => { dispatch(getIndustries()) },
    onSubmit: (formFields) => { dispatch(postProfile(formFields)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfileFormContainer);
