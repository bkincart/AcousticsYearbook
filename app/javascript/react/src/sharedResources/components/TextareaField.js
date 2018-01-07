import React from 'react';
import { Field } from 'redux-form';

const TextareaField = ({ id, input, label, meta: { touched, error } }) => {

  return(
    <div>
      <label htmlFor={id}> { label } </label>
      <textarea {...input} id={id} rows="7" />
      { touched && error && <span style={{color: 'red'}}>{error}</span> }
    </div>
  )
}

export default TextareaField;
