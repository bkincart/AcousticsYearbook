import React from 'react';
import { Field } from 'redux-form';

const InputField = ({ id, input, label, meta: { touched, error }, type }) => {

  return(
    <div>
      <label htmlFor={id}> { label } </label>
      <input {...input} type={type} id={id} />
      { touched && error && <span style={{color: 'red'}}>{error}</span> }
    </div>
  )
}

export default InputField;
