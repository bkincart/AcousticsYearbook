import React from 'react';
import Dropzone from 'react-dropzone';

const FileDropField = ({ input, meta: { touched, error }, name }) => {
  const file = input.value;

  const onDrop = (file, event) => {
    input.onChange(file)
  }

  let fileList;

  if(file) {
    fileList =
      <div>
        <h4>Dropped File:</h4>
        <ul>
          <li>{file[0].name}</li>
        </ul>
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
