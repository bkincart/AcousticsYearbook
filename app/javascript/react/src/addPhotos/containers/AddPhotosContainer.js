import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import { getSchoolYears } from '../actions/getSchoolYears';

class AddPhotosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      schoolYear: ""
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
    console.log(this.state);
  }

  componentDidMount() {
    this.props.getSchoolYears();
  }

  render() {
    let fileList, files;
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

    const placeholder = [{id: "", year_name: "Optionally select a school year"}]
    let schoolYears = placeholder.concat(this.props.schoolYears);
    let options = schoolYears.map((schoolYear) => {
      return <option key={schoolYear.id} value={schoolYear.id}>{schoolYear.year_name}</option>
    })

    return(
      <div>
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
    schoolYears: state.photos.schoolYears
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
