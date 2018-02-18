import React from 'react';
import Dropzone from 'react-dropzone';

const FileDropField = ({ input, meta: { touched, error }, name }) => {
  const fileArray = input.value;

  const onDrop = (file, event) => {
    input.onChange(file)
  }

  let fileList, files;

  if(fileArray) {
    files = fileArray.map((file, i) => {
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
     <Dropzone
       name={name}
       onDrop={onDrop}
     >
       <div>Try dropping some files here, or click to select files to upload.</div>
     </Dropzone>
     { fileList }
     { touched && error && <span style={{color: 'red'}}>{error}</span> }
   </div>
  )
}

export default FileDropField;
