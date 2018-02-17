import React from 'react';
import { Field } from 'redux-form';

const SelectDropdownField = ({ id, input, label, meta: { touched, error }, optionArray }) => {

  let options = optionArray.map((optionData) => {
    return(
      <option key={optionData.id} value={optionData.id}>
        {optionData.name}
      </option>
    )
  })

  return(
    <div>
      <label htmlFor={id}> { label } </label>
      <select {...input} id={id}>
        <option />
        {options}
      </select>
      { touched && error && <span style={{color: 'red'}}>{error}</span> }
    </div>
  )
}

export default SelectDropdownField;
