import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class AddPhotosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    let newFiles = this.state.files;
    this.setState({ files: newFiles.concat(acceptedFiles) })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.files);
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

    return(
      <div>
        <h2>Add Photos</h2>
        <form onSubmit={this.handleSubmit}>
          <Dropzone onDrop={(files) => this.onDrop(files)}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          {fileList}
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default AddPhotosContainer;
