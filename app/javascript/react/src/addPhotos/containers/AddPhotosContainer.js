import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import { getSchoolYears } from '../actions/getSchoolYears';

class AddPhotosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      schoolYear: "",
      errors: null,
      successMessage: null
    }

    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleYearChange(event) {
    let year = event.target.value;
    this.setState({ schoolYear: year })
  }

  onDrop(acceptedFiles, rejectedFiles) {
    let newFiles = this.state.files;
    this.setState({ files: newFiles.concat(acceptedFiles) })
  }

  handleSubmit(event) {
    event.preventDefault();
    let body = new FormData();
    body.append('year_id', this.state.schoolYear)

    this.state.files.forEach(function(photo, i) {
      body.append(`photo${i + 1}`, photo)
    })

    fetch('/api/v1/photos',
      {
        method: 'POST',
        credentials: 'same-origin',
        body
      }
    )
    .then(response => {
      debugger;
      if(response.status === 500) {
        throw('Server Error.')
      } else {
        return response.json();
      }
    })
    .then(data => {
      debugger;
      if(data.errors) {
        this.setState({
          successMessage: null,
          errors: data.errors
        })
      } else if(data.message){
        this.setState({
          errors: null,
          successMessage: data.message,
          files: [],
          schoolYear: ""
        })
      }
    })
  }

  componentDidMount() {
    this.props.getSchoolYears();
  }

  render() {
    let fileList, files, messageDiv;
    if(this.state.files.length > 0) {
      files = this.state.files.map((file, i) => {
        return(<li key={i}>{file.name}</li>)
      })

      fileList =
        <div>
          <h4>Dropped Files:</h4>
          <ul> { files } </ul>
        </div>
    }

    if(this.state.successMessage) {
      messageDiv =
        <div>
          <p>{this.state.successMessage}</p>
        </div>
    } else if(this.state.errors) {
      let errorList = this.state.errors.map((error) => {
        <li>{error}</li>
      })

      messageDiv =
        <div>
          <ul>
            {errorList}
          </ul>
        </div>
    }

    const placeholder = [{id: "", year_name: "Optionally select a school year"}]
    let schoolYears = placeholder.concat(this.props.schoolYears);
    let options = schoolYears.map((schoolYear) => {
      return <option key={schoolYear.id} value={schoolYear.id}>{schoolYear.year_name}</option>
    })

    return(
      <div>
        {messageDiv}
        <h2>Add Photos</h2>
        <form onSubmit={this.handleSubmit}>
          <Dropzone onDrop={(files) => this.onDrop(files)}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          {fileList}
          <select onChange={this.handleYearChange} value={this.state.schoolYear}>
            {options}
          </select>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    schoolYears: state.photos.schoolYears,
    successMessage: state.photos.successMessage,
    errors: state.photos.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSchoolYears: () => {
      dispatch(getSchoolYears())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhotosContainer);
