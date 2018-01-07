import React from 'react';
import { Field } from 'redux-form';

const SelectStateDropdownField = ({ id, input, label, meta: { touched, error }, optionArray }) => {

  let options = optionArray.map((optionData) => {
    return(
      <option key={optionData} value={optionData}>
        {optionData}
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

export default SelectStateDropdownField;
